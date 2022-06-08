import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import TopRatedDoctor from "../components/patient_doctor/TopRatedDoctor";
import DoctorsInformation from "../components/patient_doctor/DoctorsInformation";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorsPage = () => {
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
            <DoctorsInformation />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TopRatedDoctor />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorsPage;
