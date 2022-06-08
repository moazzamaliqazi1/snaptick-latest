import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import SmallMedicationCard from "./SmallMedicationCard"
const PatientMedication = () => {
  return (
    <>
      <Box>
        <Paper elevation={5} sx={{ p: 1 }}>
          <Typography variant="h4" component="h4" color="primary" sx={{ mb: 1 }}>
            Medications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <SmallMedicationCard/>
            </Grid>
            <Grid item xs={12} md={4}>
              <SmallMedicationCard/>
            </Grid>
            <Grid item xs={12} md={4}>
              <SmallMedicationCard/>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default PatientMedication;
