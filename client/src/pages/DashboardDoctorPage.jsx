import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorFilterSearch from "../components/patient_doctor/DoctorFilterSearch";
import PatientResult from "../components/patient_doctor/PatientResult";
import DoctorDashboardOverview from "../components/patient_doctor/DoctorDashboardOverview";
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
            <DoctorDashboardOverview />
          </Box>
          <Box sx={{ mb: 2 }}>
            <DoctorFilterSearch />
          </Box>
          <Box sx={{ mb: 2 }}>
            <PatientResult />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DashboardDoctorPage;
