import React from "react";
import { Box } from "@mui/material";
import PatientNaveBar from "../components/shared/PatientNaveBar";
import SearchDoctor from "../components/patient_doctor/SearchDoctor";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const SearchDoctorPage = () => {
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
            <SearchDoctor />
          </Box>
        </Box>
      )}
    </>
  );
};
export default SearchDoctorPage;
