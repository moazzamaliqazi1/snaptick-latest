import React from "react";
import { Container, Paper, Grid } from "@mui/material";
import BasicProfile from "../shared/BasicProfile";
import DoctorProfileOtherLinks from "../patient_doctor/DoctorProfileOtherLinks";

const DoctorProfile = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={6} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BasicProfile />
            </Grid>
            <Grid item xs={12}>
              <DoctorProfileOtherLinks />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DoctorProfile;
