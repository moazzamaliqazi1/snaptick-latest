import React from "react";
import { Box, Container } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientAppointmentsDetail from "../components/patient_doctor/PatientAppointmentsDetail";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientAppointmentDetailPage = () => {
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
            <Container maxWidth="xl">
              <PatientAppointmentsDetail/>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};
export default PatientAppointmentDetailPage;
