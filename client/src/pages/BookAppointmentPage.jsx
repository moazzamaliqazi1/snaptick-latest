import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import BookAppointmentForm from "../components/patient_doctor/BookAppointmentForm";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const BookAppointmentPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <PatientNaveBar />
          </Box>
          <Box sx={{ mb: 10, mt: 5 }}>
            <BookAppointmentForm />
          </Box>
        </Box>
      )}
    </>
  );
};

export default BookAppointmentPage;
