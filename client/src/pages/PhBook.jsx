import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Footer from "../components/shared/Footer";
import Book from "../components/shared/Book";
import { Box } from "@mui/material";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PhBook = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <LogoOnlyNaveBar />
          </Box>
          <Box style={{ marginBottom: 5, marginTop: 200 }}>
            <Book />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PhBook;
