import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Footer from "../components/shared/Footer";
import Book from "../components/shared/Book";
import EmailSubs from "../components/shared/EmailSubs.jsx";
import { Box } from "@mui/material";
const PhBook = () => {
    return (
        <>
                <Box>
                    <Box>
                        <LogoOnlyNaveBar />
                    </Box>
                    <Box>
                    </Box>
                    <Box style={{ marginBottom: 5, marginTop: 5 }}>
                        <EmailSubs />
                    </Box>
                    <Box>
                        <Footer />
                    </Box>
                </Box>
        </>
    );
};
export default PhBook;
