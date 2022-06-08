import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorCertificates from "../components/patient_doctor/DoctorCertificates";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorCertificatePage = () => {
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
            <DoctorCertificates />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorCertificatePage;
