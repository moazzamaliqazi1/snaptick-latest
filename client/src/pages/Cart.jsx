import React from "react";
import { Box } from "@mui/material";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Footer from "../components/shared/Footer";
import Cart from "../components/shared/Cart";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const Cartt = () => {
    const initialState = useSelector((state) => state.initialState);

    return (

        <>
            <Auth />
            {initialState.authDisplay ? null : (<>
                <Box>
                    <LogoOnlyNaveBar />
                </Box>
                <Box>
                    <Cart />
                </Box>
                <Box style={{marginTop: 300}}>
                    <Footer />
                </Box></>)}

        </>
    );
};
export default Cartt;
