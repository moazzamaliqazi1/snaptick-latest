import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Footer from "../components/shared/Footer";
import Photographer from "../components/shared/Photographer";
import { Box } from "@mui/material";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const HirePhotographer = () => {
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
            <Photographer />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default HirePhotographer;