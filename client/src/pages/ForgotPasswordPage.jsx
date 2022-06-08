import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import ForgotPassword from "../components/onboarding/ForgotPassword.jsx";
const ForgotPasswordPage = () => {
  return (
    <>
      <Box>
        <Box sx={{mb: 10}}>
          <LogoOnlyNaveBar />
        </Box>
        <Box>
          <ForgotPassword />
        </Box>
      </Box>
    </>
  );
};
export default ForgotPasswordPage;