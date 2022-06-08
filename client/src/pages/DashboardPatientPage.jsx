import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import PatientHeader from "../components/patient_doctor/PatientHeader";
import TopRatedDoctor from "../components/patient_doctor/TopRatedDoctor";
import CategoryFiverDoctorList from "../components/patient_doctor/CategoryFiverDoctorList";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DashboardPatientPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <PatientNaveBar />
          </Box>
          <Box sx={{ mb: 10 }}>
            <PatientHeader />
          </Box>
          <Box sx={{ mb: 10 }}>
            <CategoryFiverDoctorList />
          </Box>
          <Box sx={{ mb: 10 }}>
            <TopRatedDoctor />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DashboardPatientPage;
