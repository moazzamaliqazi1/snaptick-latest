import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import onboarding from "../../api/onboarding";

const VerifyCode = () => {
  const params = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const codeCheck = async () => {
    try {
      if (code) {
        // hit verify code API
        const result = await onboarding.verifyCode(params.email, code);
        if (result.status === 200 && result.data.is_success) {
          navigate("/login");
        } else {
          toast.error(result.data.message);
        }
      } else {
        toast.error("All fields are requred");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const resendCode = async () => {
    try {
      const result = await onboarding.resendCode(params.email);
      if (result.status === 200 && result.data.is_success) {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const checkEmail = ()=>{
      if (!validator.isEmail(params.email, { domain_specific_validation: true })){
          navigate('/login')
      }
    }
  useEffect(()=>{
    checkEmail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.email])
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
          sx={{ borderRadius: 2, my: 4, p: 4 }}
          className="w-100 min-w40"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h6" align="center">
              Verify Your Email
            </Typography>
          </Box>
          <Box sx={{ mx: 3, my: 2 }}>
            <TextField
              label="Code"
              variant="outlined"
              type="text"
              color="primary"
              name="code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ pb: 2, mr: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", backgroundColor: '#002856', float: 'right' }}
              onClick={codeCheck}
            >
              Verify
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", backgroundColor: '#002856', float: 'left', ml:3 }}
              onClick={resendCode}
            >
              Resend Code
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default VerifyCode;
