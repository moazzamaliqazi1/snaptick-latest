import React from "react";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
import Footer from "../components/shared/Footer";
import Profile from "../components/shared/Profile";
import AddPaymentCard from "../components/patient_doctor/AddPaymentCard";
import PaymentsCardList from "../components/patient_doctor/PaymentsCardList";
import { Box } from "@mui/material";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const UserProfile = () => {
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
            <Profile />
          </Box>
          <Box style={{ marginTop: 60 }}>
            <hr style={{color:'black'}}></hr>
            <br></br>
            <AddPaymentCard />
          </Box>
          <Box style={{ marginTop: 50 }}>
            <PaymentsCardList />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};
export default UserProfile;