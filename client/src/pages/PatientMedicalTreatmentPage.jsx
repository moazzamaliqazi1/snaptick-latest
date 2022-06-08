import React from "react";
import { Box, Container } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientMedialTreatmentReview from "../components/patient_doctor/PatientMedialTreatmentReview";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientMedicalTreatmentPage = () => {
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
            <PatientMedialTreatmentReview isLimit={false} limit={3} isMoreButton={false}/>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};
export default PatientMedicalTreatmentPage;
