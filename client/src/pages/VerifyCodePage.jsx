import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import VerifyCode from "../components/onboarding/VerifyCode.jsx";
const RegisterPage = () => {
  return (
    <>
      <Box>
        <Box sx={{mb: 10}}>
          <LogoOnlyNaveBar />
        </Box>
        <Box>
          <VerifyCode />
        </Box>
      </Box>
    </>
  );
};
export default RegisterPage;