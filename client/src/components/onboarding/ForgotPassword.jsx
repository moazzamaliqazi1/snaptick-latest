import React, { useState } from "react";
import { Box, TextField, Container } from "@mui/material";
import { ActionButtonCustomize } from "../shared/CustomizeButton";
import { ToastContainer, toast } from "react-toastify";
import onboarding from "../../api/onboarding";
import validator from "validator";

const ForgotPassword = () => {
  const { isEmail } = validator;
  const [forgotPasswordFields, setForgotPasswordFields] = useState({
    email: "",
    email_error: "",
    is_email_error: false,
  });
  const sendCode = async () => {
    try {
      const { email, is_email_error } = forgotPasswordFields;
      if (email) {
        if (is_email_error) {
          toast.error("Please resolves your red messages");
        } else {
          // hit reguster API
          const result = await onboarding.sendEmailForgotPassword(email);
          if (result.status === 200 && result.data.is_success) {
            toast.success(result.data.message);
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
  const forgotPasswordUseState = (event) => {
    const { name, value } = event.target;
    setForgotPasswordFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "email") {
      if (isEmail(value, { domain_specific_validation: true })) {
        setForgotPasswordFields((prev) => {
          return {
            ...prev,
            is_email_error: false,
            email_error: "",
          };
        });
      } else {
        setForgotPasswordFields((prev) => {
          return {
            ...prev,
            is_email_error: true,
            email_error: "Email Format Not Valid",
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
        <Box sx={{ mb: 2 }}>
          <TextField
            error={forgotPasswordFields.is_email_error}
            label="Email"
            variant="outlined"
            type="email"
            color="primary"
            name="email"
            value={forgotPasswordFields.email}
            onChange={forgotPasswordUseState}
            helperText={forgotPasswordFields.email_error}
            fullWidth
          />
        </Box>
        <Box>
          <ActionButtonCustomize
            sx={{ color: "white", backgroundColor: '#002856', float: 'right' }}
            variant="contained"
            fullWidth
            size="medium"
            onClick={sendCode}
          >
            Send Code
          </ActionButtonCustomize>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
