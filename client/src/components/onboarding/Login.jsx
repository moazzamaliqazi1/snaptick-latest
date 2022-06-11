import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Divider,
  Button,
  Container,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import onboarding from "../../api/onboarding";
import validator from "validator";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";
import logoImage from "../../images/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { isEmail } = validator;
  const [loginFields, setLoginFields] = useState({
    email: "",
    email_error: "",
    is_email_error: false,
    password: "",
  });
  const navigate = useNavigate();
  const loginCheck = async () => {
    try {
      const { email, is_email_error, password } = loginFields;
      if (email && password) {
        if (is_email_error) {
          toast.error("Please resolves your red messages");
        } else {
          // hit login API
          const result = await onboarding.login(email, password);
          if (result.status === 200 && result.data.is_success) {
            dispatch(addUser(result.data.data));
            cookies.set("token", result.data.data.jwt_token, { path: "/" });
            navigate(`/`);
          } else if (result.status === 201) {
            navigate(`/verify-code/${email}`);
          } else {
            toast.error(result.data.message);
          }
        }
      } else {
        toast.error("All fields are required");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const loginUseState = (event) => {
    const { name, value } = event.target;
    setLoginFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "email") {
      if (isEmail(value, { domain_specific_validation: true })) {
        setLoginFields((prev) => {
          return {
            ...prev,
            is_email_error: false,
            email_error: "",
          };
        });
      } else {
        setLoginFields((prev) => {
          return {
            ...prev,
            is_email_error: true,
            email_error: "Email Format Not Valid",
          };
        });
      }
    } else if (name === "password") {
      setLoginFields((prev) => {
        return {
          ...prev,
        };
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{ borderRadius: 2, my: 2, p: 4 }}
          className="w-100 min-w40"
        >
          <Box sx={{}}>
            <Link className="text-decoration-none" to="/HomePage">
              <center>
                <img src={logoImage} width="200" height="100" alt="SnapTick" />
              </center>
            </Link>
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              error={loginFields.is_email_error}
              label="Email"
              variant="outlined"
              type="email"
              color="primary"
              name="email"
              value={loginFields.email}
              onChange={loginUseState}
              helperText={loginFields.email_error}
              fullWidth
            />
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              color="primary"
              name="password"
              value={loginFields.password}
              onChange={loginUseState}
              fullWidth
            />
          </Box>
          <Box sx={{ pb: 1, mr: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: "white",
                backgroundColor: "#003690",
                float: "right",
              }}
              onClick={loginCheck}
            >
              Login
            </Button>
          </Box>
          <Divider color="primary" sx={{ mt: 5, mb: 2 }} />

          <Box sx={{ mb: 4 }}>
            <Button
              variant="text"
              size="medium"
              sx={{ color: "#003690", float: "left" }}
              onClick={() => navigate("/register")}
            >
              don't have account?
            </Button>
            <Button
              variant="text"
              size="medium"
              sx={{ color: "#003690", float: "right" }}
              onClick={() => navigate("/forgot-password")}
            >
              forgot password?
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
