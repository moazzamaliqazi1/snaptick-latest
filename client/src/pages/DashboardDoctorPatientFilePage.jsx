import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import DoctorPatientFileViewer from "../components/patient_doctor/DoctorPatientFileViewer";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DashboardDoctorPatientFilePage = () => {
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
            <DoctorPatientFileViewer />
          </Box>
        </Box>
      )}
    </>
  );
};

export default DashboardDoctorPatientFilePage;
