import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import PatientImageOne from "../../images/temp/pateint_image_one.jpg";
import PatientRecordsModal from "../shared/PatientRecordsModal";
import { useNavigate } from 'react-router-dom';
const PatientResultCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <PatientRecordsModal />
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
              <img
                src={PatientImageOne}
                alt="patient name"
                style={{ width: "240px", height: "159px" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Box>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    component="p"
                    align="center"
                    sx={{
                      marginLeft: {
                        md: 1,
                      },
                    }}
                  >
                    Talha Khan
                  </Typography>
                  <Typography variant="p" component="p" align="center">
                    26
                  </Typography>
                </Grid>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    marginLeft: {
                      md: 1,
                    },
                  }}
                >
                  <Typography variant="p" component="span" color="primary">
                    Comments: &nbsp;
                  </Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  marginRight: 1,
                  marginBottom: 1,
                  marginTop: 1,
                }}
                onClick={() => {
                  navigate('/dashboard/doctor/patient/0/records')
                }}
              >
                View Records
              </Button>
              <Button
                variant="contained"
                sx={{ color: "white", marginBottom: 1, marginTop: 1 }}
                color="error"
              >
                View Notes
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default PatientResultCard;
