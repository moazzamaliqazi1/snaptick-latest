import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Frame from "../components/shared/Frame";
import Footer from "../components/shared/Footer";
import EmailSubs from "../components/shared/EmailSubs.jsx";
import { Box } from "@mui/material";
const PhFrame = () => {
    return (
        <>
                <Box>
                    <Box>
                        <LogoOnlyNaveBar />
                    </Box>
                    <Box style={{ marginTop: 100 }}>
                        <Frame />
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
export default PhFrame;
