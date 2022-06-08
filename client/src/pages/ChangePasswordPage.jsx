import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import ChangePassword from "../components/onboarding/ChangePassword.jsx";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const ChangePasswordPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>

      <Box>
        <Box sx={{ mb: 10 }}>
          <LogoOnlyNaveBar />
        </Box>
        <Box>
          <ChangePassword />
        </Box>
      </Box>
    </>
  );
};
export default ChangePasswordPage;
