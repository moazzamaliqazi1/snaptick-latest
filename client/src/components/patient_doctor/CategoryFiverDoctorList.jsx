import React from "react";
import { Container, Paper, Grid } from "@mui/material";
import CategoryFeverCard from "../shared/CategoryFeverCard"
import { useNavigate } from "react-router-dom"
const CategoryFiverDoctorList = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{p: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
            <Grid item xs={12} md={6} lg={4} onClick={()=>navigate('/dashboard/patient/doctors')}><CategoryFeverCard/></Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default CategoryFiverDoctorList;
