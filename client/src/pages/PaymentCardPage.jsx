import React from "react";
import { Box } from "@mui/material";
import PaymentsCardList from "../components/patient_doctor/PaymentsCardList";
import AddPaymentCard from "../components/patient_doctor/AddPaymentCard";
import Auth from "../Auth";
import { useSelector } from "react-redux";
import LogoOnlyNaveBar from "../components/shared/LogoOnlyNaveBar";
const PaymentCardPage = () => {
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
            <AddPaymentCard />
          </Box>
          <Box sx={{ mb: 10, mt: 5 }}>
            <PaymentsCardList />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PaymentCardPage;
