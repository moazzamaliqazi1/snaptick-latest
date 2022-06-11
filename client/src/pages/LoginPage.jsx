import React from "react";
import { Box } from "@mui/material";
import Login from "../components/onboarding/Login";

const LoginPage = () => {
  return (
    <>
      <Box>
        <Box sx={{marginTop: 8}}>
          <Login />
        </Box>
      </Box>
    </>
  );
};
export default LoginPage;
