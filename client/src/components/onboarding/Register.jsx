import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Divider,
  Button,
  Container,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import onboarding from "../../api/onboarding";
import validator from "validator";
import { Link } from "react-router-dom"
import logoImage from "../../images/logo.png"
const Register = () => {
  const navigate = useNavigate();
  const { isEmail, isStrongPassword } = validator;
  const [registerFields, setRegisterFields] = useState({
    user_name: "",
    user_name_error: "",
    is_user_name_error: false,
    email: "",
    email_error: "",
    is_email_error: false,
    password: "",
    password_error: "",
    is_password_error: false,
  });
  const registerCheck = async () => {
    try {
      const {
        user_name,
        is_user_name_error,
        email,
        is_email_error,
        password,
        is_password_error
      } = registerFields;
      if (
        user_name &&
        email &&
        password
      ) {
        if (is_email_error || is_password_error || is_user_name_error) {
          toast.error("Please resolves your red messages");
        } else {
          // hit reguster API
          const result = await onboarding.register(
            user_name,
            email,
            password
          );
          if (result.status === 200 && result.data.is_success) {
            toast.success(result.data.message);
            navigate(`/verify-code/${email}`);
          } else {
            toast.error(result.data.message);
          }
        }
      } else {
        toast.error("All fields are requred");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const registerUseState = (event) => {
    const { name, value } = event.target;
    setRegisterFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "user_name") {
      if (validator.matches(value, "^[a-zA-Z0-9_.]*$")) {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_user_name_error: false,
            user_name_error: "",
          };
        });
      } else {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_user_name_error: true,
            user_name_error: "Invalid Username",
          };
        });
      }
    } else if (name === "email") {
      if (isEmail(value, { domain_specific_validation: true })) {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_email_error: false,
            email_error: "",
          };
        });
      } else {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_email_error: true,
            email_error: "Email Format Not Valid",
          };
        });
      }
    } else if (name === "password") {
      if (isStrongPassword(value)) {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_password_error: false,
            password_error: "",
          };
        });
      } else {
        setRegisterFields((prev) => {
          return {
            ...prev,
            is_password_error: true,
            password_error: "Password Not Strong, at least 8 characters with 1 capital letter, including a number & special character",
          };
        });
      }
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

        <Paper elevation={3} sx={{ borderRadius: 2, my: 2, p: 4 }}
          className="w-100 min-w40">
          <Box sx={{}}>
            <Link className="text-decoration-none" to='/'>
              <center><img src={logoImage} width="200" height="100" alt="SnapTick" /></center>
            </Link>
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              error={registerFields.is_user_name_error}
              label="User Name"
              variant="outlined"
              type="text"
              color="primary"
              name="user_name"
              value={registerFields.user_name}
              onChange={registerUseState}
              helperText={registerFields.user_name_error}
              fullWidth
            />
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              error={registerFields.is_email_error}
              label="Email"
              variant="outlined"
              type="email"
              color="primary"
              name="email"
              value={registerFields.email}
              onChange={registerUseState}
              helperText={registerFields.email_error}
              fullWidth
            />
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              error={registerFields.is_password_error}
              label="Password"
              variant="outlined"
              type="password"
              color="primary"
              name="password"
              value={registerFields.password}
              onChange={registerUseState}
              helperText={registerFields.password_error}
              fullWidth
            />
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ color: "white", backgroundColor: '#003690', float: 'right' }}
              onClick={registerCheck}
            >
              Register
            </Button>
          </Box>
          <Divider color="primary" sx={{ mt: 8, mb: 2 }} />
          <center>
            <Button
              variant="text"
              size="medium"
              sx={{ color: '#003690' }}
              onClick={() => navigate("/login")}
            >
              already have account?
            </Button>
          </center>
        </Paper>
      </Container>
    </>
  );
};
export default Register;