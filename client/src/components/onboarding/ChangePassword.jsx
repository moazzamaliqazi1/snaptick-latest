import React, { useState } from "react";
import { Box, Paper, TextField, Container } from "@mui/material";
import { ActionButtonCustomize } from "../shared/CustomizeButton";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import onboarding from "../../api/onboarding";
import validator from "validator";

const ChangePassword = () => {
  const { isStrongPassword } = validator;
  const params = useParams();
  const navigate = useNavigate();
  const [changePasswordFields, setChangePasswordFields] = useState({
    password: "",
    password_error: "",
    is_password_error: false,
  });
  const changePasswordUseState = (event) => {
    const { name, value } = event.target;
    setChangePasswordFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "password") {
      if (isStrongPassword(value)) {
        setChangePasswordFields((prev) => {
          return {
            ...prev,
            is_password_error: false,
            password_error: "",
          };
        });
      } else {
        setChangePasswordFields((prev) => {
          return {
            ...prev,
            is_password_error: true,
            password_error: "Password Not Strong, at least 8 characters with 1 capital letter, including a number & special character",
          };
        });
      }
    }
  };
  const changePassword = async () => {
    try {
      const { password, is_password_error } = changePasswordFields;
      if (password) {
        if (is_password_error) {
          toast.error("Please resolves your red messages");
        } else {
          // hit reguster API
          const result = await onboarding.forgetPasswordChange(params.user_id, params.code, password);
          if (result.status === 200 && result.data.is_success) {
            toast.success(result.data.message);
            navigate('/login')
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
        <Paper elevation={3} sx={{ borderRadius: 2, mb: 2, p: 1 }}>
          <Box sx={{ mb: 2 }}>
            <TextField
              error={changePasswordFields.is_password_error}
              label="Change Password"
              variant="outlined"
              type="password"
              color="primary"
              name="password"
              value={changePasswordFields.password}
              onChange={changePasswordUseState}
              helperText={changePasswordFields.password_error}
              fullWidth
            />
          </Box>
          <Box>
            <ActionButtonCustomize
              sx={{backgroundColor:'#003690', color:'white'}}
              variant="contained"
              fullWidth
              size="small"
              onClick={changePassword}
            >
              Change Password
            </ActionButtonCustomize>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ChangePassword;
