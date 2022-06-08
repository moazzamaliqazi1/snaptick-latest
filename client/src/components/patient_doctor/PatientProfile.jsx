import React from "react";
import { Container, Paper, Grid } from "@mui/material";
import BasicProfile from "../shared/BasicProfile";
import PatientMedialTreatmentReview from "../patient_doctor/PatientMedialTreatmentReview";
import PatientAppointments from "../patient_doctor/PatientAppointments";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const PatientProfile = () => {
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={6} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BasicProfile />
            </Grid>
            {profile.jwt_token === token ? (
              <>
                <Grid item xs={12}>
                  <PatientMedialTreatmentReview
                    isLimit={true}
                    limit={2}
                    isMoreButton={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PatientAppointments
                    isLimit={true}
                    limit={8}
                    isMoreButton={true}
                  />
                </Grid>
              </>
            ) : null}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default PatientProfile;
