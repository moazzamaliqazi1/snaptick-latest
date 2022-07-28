import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Help from "../components/shared/Help";
import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const Helpp = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box>
            <Contact />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Help />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default Helpp;
