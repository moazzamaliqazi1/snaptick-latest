import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientProfile from "../components/patient_doctor/PatientProfile";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const PatientProfilePage = () => {
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
            <PatientProfile />
          </Box>
        </Box>
      )}
    </>
  );
};
export default PatientProfilePage;
