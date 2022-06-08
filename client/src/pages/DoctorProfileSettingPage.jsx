import React from "react";
import { Box } from "@mui/material";
import DoctorNaveBar from "../components/shared/DoctorNaveBar";
import DoctorProfileSetting from "../components/patient_doctor/DoctorProfileSetting";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const DoctorProfileSettingPage = () => {
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
            <DoctorProfileSetting />
          </Box>
        </Box>
      )}
    </>
  );
};
export default DoctorProfileSettingPage;
