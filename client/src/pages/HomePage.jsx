import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Sliderhome from "../components/shared/Sliderhome";
import Myservices from "../components/shared/Myservices";
import About from "../components/shared/About";
import Footer from "../components/shared/Footer";
import Reviewbanner from "../components/shared/Reviewbanner.jsx";
import Contact from "../components/shared/Contact.jsx";
import EmailSubs from "../components/shared/EmailSubs.jsx";
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
            <Sliderhome />
          </Box>
          <Box style={{ marginBottom: 5 }}>
            <Myservices />
          </Box>
          <Box id='about' style={{ marginBottom: 5 }}>
            <About />
          </Box>
          <Box id='contact' style={{ marginBottom: 5 }}>
            <Contact />
          </Box>
          <Box style={{ marginBottom: 5 }}>
            <Reviewbanner />
          </Box>
          <Box style={{ marginBottom: 5 }}>
            <br></br>
            <br></br>
            <EmailSubs />
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
