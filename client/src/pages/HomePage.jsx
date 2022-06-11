import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import SliderHome from "../components/shared/SliderHome";
import MyServices from "../components/shared/MyServices";
import About from "../components/shared/About";
import Footer from "../components/shared/Footer";
import ReviewBanner from "../components/shared/ReviewBanner.jsx";
import Contact from "../components/shared/Contact.jsx";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const HomePage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box  id='home'>
            <SliderHome />
          </Box>
          <Box style={{ marginBottom: 5 }}>
            <MyServices />
          </Box>
          <Box id='about' style={{ marginBottom: 5 }}>
            <About />
          </Box>
          <Box id='contact' style={{ marginBottom: 5 }}>
            <Contact />
          </Box>
          <Box style={{ marginBottom: 5 }}>
            <ReviewBanner />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default HomePage;
