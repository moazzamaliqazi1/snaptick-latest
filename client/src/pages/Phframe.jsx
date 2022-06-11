import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Frame from "../components/shared/Frame";
import Footer from "../components/shared/Footer";
import { Box } from "@mui/material";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const PhFrame = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box style={{ marginTop: 100 }}>
            <Frame />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PhFrame;
