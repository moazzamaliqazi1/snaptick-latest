import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientTestReports from "../components/patient_doctor/PatientTestReports";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientTestReportsPage = () => {
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
            <PatientTestReports />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PatientTestReportsPage;
