import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Drawer
} from "@mui/material";
import DoctorOneImage from "../../images/temp/doctor_one.jpg";
import DoctorMeetingSelection from "./DoctorMeetingSelection";
import DownDrawerListDoctorReviews from "../shared/DownDrawerListDoctorReviews";
import { useNavigate } from "react-router-dom"

const CategoryDoctor = () => {
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
          <Grid container spacing={1}>
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <img
                src={DoctorOneImage}
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
              <Typography variant="h4" component="h4" color="primary">
                Dr Ahsan
              </Typography>
              <Typography variant="p" component="p" color="primary">
                Dermatologist, Cosmetologist
              </Typography>
              <Typography variant="p" component="p" color="primary">
                M.B.B.S., M.C.P.S Experience : 5 years
              </Typography>
              <Typography variant="p" component="p" color="primary">
                Experience : 5 years
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} mt={5}>
                  <DoctorMeetingSelection
                    title="Ziya hospital (Ferozpur Road Lahore)"
                    available="Available (Mon - Fri : 12 PM-2 PM)"
                    price="1000/-"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} mt={5}>
                  <DoctorMeetingSelection
                    title="Chat Consultation"
                    available="Chat Consultation Available (Mon - Fri : 12 PM-2 PM)"
                    price="700/-"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} mt={5}>
                  <DoctorMeetingSelection
                    title="Video Consultation"
                    available="Online Video Consultation (Mon - Fri : 12 PM-2 PM)"
                    price="1500/-"
                  />
                </Grid>
              </Grid>
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

export default CategoryDoctor;
