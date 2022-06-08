import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import PatientDoctorProfile from "../components/patient_doctor/PatientDoctorProfile";
import PatientDoctorRecords from "../components/patient_doctor/PatientDoctorRecords";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DashboardDoctorPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box sx={{ mb: 2 }}>
            <DoctorNaveBar />
          </Box>
          <Box sx={{ mb: 2 }}>
            <PatientDoctorProfile />
          </Box>
          <Box sx={{ mb: 2 }}>
            <PatientDoctorRecords />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DashboardDoctorPage;
