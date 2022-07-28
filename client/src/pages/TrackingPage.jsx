import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Tracking from "../components/shared/Tracking";
import Footer from "../components/shared/Footer";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const TrackingPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box sx={{ mt: 15 }}>
            <Tracking />
          </Box>
          <Box sx={{ mt: 20 }}>
            <Footer />
          </Box>
        </Box>
      )}

    </>
  );
};
export default TrackingPage;
