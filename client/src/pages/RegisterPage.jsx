import React from "react";
import { Box } from "@mui/material";
import Register from "../components/onboarding/Register.jsx";
const RegisterPage = () => {
  return (
    <>
      <Box>
        <Box sx={{marginTop:2}}>
          <Register />
        </Box>
      </Box>
    </>
  );
};
export default RegisterPage;