import React from "react";
import { useSelector } from "react-redux";
import { Alert, AlertTitle, Box, Grid, Container, Paper } from "@mui/material";
import PatientProfileImageUpload from "./PatientProfileImageUpload";
import PatientBasicInfoChange from "./PatientBasicInfoChange";
import PatientSocialSetting from "./PatientGeneralSetting";
const PatientProfileSetting = () => {
  const globalMessages = useSelector((state) => state.globalMessages);
  return (
    <>
      <Container maxWidth="xl">
        {globalMessages.patientProfileCompleteMessage ? (
          <Alert
            severity="info"
            variant="filled"
            sx={{ marginTop: 2, marginBottom: 4 }}
          >
            <AlertTitle>Info</AlertTitle>
            {globalMessages.patientProfileCompleteMessage}
          </Alert>
        ) : null}
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <PatientProfileImageUpload />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <PatientBasicInfoChange />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, mt: 5, mb: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <PatientSocialSetting />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
export default PatientProfileSetting;
