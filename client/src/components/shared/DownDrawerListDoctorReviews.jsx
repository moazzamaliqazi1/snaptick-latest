import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import DoctorReviewCards from './DoctorReviewCards'

const DownDrawerListPatientDetails = () => {
  const [drawerState, DrawerSetState] = useState({ bottom: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    DrawerSetState({ ...drawerState, [anchor]: open });
  };

  return (
    <>
      <Box
        sx={{ width: "auto", maxHeight: 300 }}
        role="presentation"
        onClick={toggleDrawer("bottom", false)}
        onKeyDown={toggleDrawer("bottom", false)}
      >
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <DoctorReviewCards/>
              </Grid>
              <Grid item xs={12} md={6}>
                <DoctorReviewCards/>
              </Grid>
              <Grid item xs={12} md={6}>
                <DoctorReviewCards/>
              </Grid>
              <Grid item xs={12} md={6}>
                <DoctorReviewCards/>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default DownDrawerListPatientDetails;
