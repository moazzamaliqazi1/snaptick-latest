import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import AboutUs from "../components/shared/AboutUs";
import Footer from "../components/shared/Footer";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const About = () => { const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
 
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box sx={{mt:7}}>
            <AboutUs />
          </Box>
          <Box sx={{mt:5}}>
            <Footer />
          </Box>
        </Box>

      )}
    </>
  );
};
export default About;
