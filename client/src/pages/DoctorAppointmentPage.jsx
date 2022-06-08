import React from "react";
import { Box, Container } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorAppointments from "../components/patient_doctor/DoctorAppointments";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorAppointmentPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <DoctorNaveBar />
          </Box>
          <Box sx={{ mb: 10, mt: 5 }}>
            <Container maxWidth="xl">
              <DoctorAppointments
                isLimit={false}
                limit={3}
                isMoreButton={false}
              />
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorAppointmentPage;
