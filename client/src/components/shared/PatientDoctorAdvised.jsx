import React, { useState } from "react";
import { Box, Paper, Grid, Typography, Button, Drawer } from "@mui/material";
import DownDrawerListDoctorReviews from "../shared/DownDrawerListDoctorReviews";
import DoctorFourImage from "../../images/temp/doctor_four.jpg";
import { useNavigate } from "react-router-dom"
const CategoryFeverCard = () => {
  const navigate = useNavigate()
  const [drawerState, drawerSetState] = useState({ bottom: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    drawerSetState({ ...drawerState, [anchor]: open });
  };
  return (
    <>
      <Box>
        <Paper elevation={5} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <img
                src={DoctorFourImage}
                alt="Talha Khan"
                style={{ width: 220, height: 300 }}
              />
              <Box sx={{ mt: 1, mb: 1 }}>
                <Button
                  variant="contained"
                  sx={{ color: "white", mr: 1, mb: 1 }}
                  color="primary"
                  onClick={()=>navigate('/dashboard/patient/0/book-appointment')}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="contained"
                  sx={{ color: "white", mb: 1 }}
                  color="primary"
                  onClick={toggleDrawer("bottom", true)}
                >
                  View Reviews
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h4" component="h4" color="primary">
                  Dr Ayesha
                </Typography>
                <Typography variant="p" component="p" color="primary">
                  Dermatologist, Cosmetologist
                </Typography>
                <Typography variant="p" component="p" color="primary">
                  M.B.B.S., M.C.P.S
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" color="primary">
                  Advised:
                </Typography>
                <Typography variant="p" component="p" color="primary">
                  Hello Talha! You need a proper treatement and proper checkup.
                  So I gave you panadol for fever. Take medicne regularly 3
                  times a day.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box>
        <Drawer
          anchor={"bottom"}
          open={drawerState["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          <DownDrawerListDoctorReviews />
        </Drawer>
      </Box>
    </>
  );
};

export default CategoryFeverCard;
