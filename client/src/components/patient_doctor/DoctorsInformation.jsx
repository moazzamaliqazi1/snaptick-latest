import React from "react";
import { Container, Paper, Grid } from "@mui/material";
import CategoryDoctor from "../shared/CategoryDoctor";
const DoctorsInformation = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}><CategoryDoctor/></Grid>
            <Grid item xs={12} md={12} lg={12}><CategoryDoctor/></Grid>
            <Grid item xs={12} md={12} lg={12}><CategoryDoctor/></Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DoctorsInformation;
