import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PaymentsCardList from "../components/patient_doctor/PaymentsCardList";
import AddPaymentCard from "../components/patient_doctor/AddPaymentCard";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientPaymentCardPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <PatientNaveBar />
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
export default PatientPaymentCardPage;
