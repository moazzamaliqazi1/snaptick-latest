import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorProfile from "../components/patient_doctor/DoctorProfile";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorProfilePage = () => {
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
            <DoctorProfile />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorProfilePage;
