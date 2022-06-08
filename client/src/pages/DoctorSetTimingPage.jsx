import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorSetTimings from "../components/patient_doctor/DoctorSetTimings";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorSetTimingPage = () => {
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
            <DoctorSetTimings />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorSetTimingPage;
