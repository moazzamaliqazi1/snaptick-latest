import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientRecords from "../components/patient_doctor/PatientRecords";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientRecordPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box sx={{ mb: 5 }}>
            <PatientNaveBar />
          </Box>
          <Box sx={{ mb: 10 }}>
            <PatientRecords />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PatientRecordPage;
