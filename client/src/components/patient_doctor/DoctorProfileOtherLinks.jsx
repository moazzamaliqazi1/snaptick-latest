import React from "react";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DoctorProfileOtherLinks = () => {
  const profile = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="p" container="p" color="primary">
              {profile.certificates && profile.certificates.length > 0
                ? "You can view or add more certificate by click view button"
                : "Add your certificates"}
            </Typography>
            <Button variant="contained" color="primary" size="small" sx={{color: 'white'}} onClick={() => navigate('/dashboard/doctor/certificates')}>
              {profile.certificates && profile.certificates.length > 0
                ? "View"
                : "Add"}
            </Button>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="p" container="p" color="primary">
              {profile.available_timings && profile.available_timings.length > 0
                ? "For update and add new timing please click on update button"
                : "Add your available timings"}
            </Typography>
            <Button variant="contained" color="primary" size="small" sx={{color: 'white'}} onClick={() => navigate('/dashboard/doctor/set/timings')}>
              {profile.available_timings && profile.available_timings.length > 0
                ? "Update"
                : "Add"}
            </Button>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="p" container="p" color="primary">
              For setting please click on setting button
            </Typography>
            <Button variant="contained" color="primary" size="small" sx={{color: 'white'}} onClick={() => navigate('/dashboard/doctor/profile/setting')}>
              Setting
            </Button>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};
export default DoctorProfileOtherLinks;
