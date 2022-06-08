import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AvatarImage from "../../images/login-background.jpg";
import moment from "moment";
import Cookies from "universal-cookie";
import { toast, ToastContainer } from "react-toastify";
import user from "../../api/user";
import { useSelector } from "react-redux";

const PatientAppointments = (props) => {
  const { limit, isMoreButton, isLimit } = props;
  const [appointmentList, setAppointmentList] = useState([]);
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();
  const getAppointment = async () => {
    try {
      const response = await user.listAppointment("patient_id", token);
      if (response.status && response.data.is_success) {
        setAppointmentList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some error to get your appointments");
    }
  };
  useEffect(() => {
    getAppointment();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Box>
        <Paper elevation={5} sx={{ p: 1, mb: 3 }}>
          <Typography variant="h6" component="h6" color="primary">
            Appointment
          </Typography>
        </Paper>
        <Box>
          <Box>
            <Grid container spacing={2}>
              {appointmentList
                .slice(0, isLimit ? limit : appointmentList.length)
                .map((item) => {
                  return (
                    <Grid item xs={12} md={4} key={item}>
                      <Paper elevation={5} sx={{ p: 1 }}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          sx={{ mb: 2 }}
                        >
                          <Box sx={{ mr: 1 }}>
                            <Avatar
                              alt={item.user_details.user_name}
                              src={
                                item.user_details.profile_image ? item.user_details.profile_image: AvatarImage
                              }
                            />
                          </Box>
                          <Box
                            sx={{
                              mr: 1,
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="h6"
                              color="primary"
                            >
                              {item.user_details.user_name}
                            </Typography>
                          </Box>
                          <Box>
                            {item.is_checked ? (
                              <Chip
                                color="success"
                                label="For Details Please Click Here"
                                sx={{
                                  color: "white",
                                  cursor: "pointer",
                                  marginTop: {
                                    xs: 1,
                                    lg: 0,
                                  },
                                }}
                                onClick={() =>
                                  navigate(
                                    `/dashboard/patient/appointments/${item}/details`
                                  )
                                }
                              />
                            ) : null}
                          </Box>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            Status
                          </Grid>
                          <Grid item xs={6}>
                            <Chip
                              label={
                                item.is_checked ? "Completed" : "Not Checked"
                              }
                              color={item.is_checked ? "success" : "warning"}
                              sx={{ color: "white" }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            Time
                          </Grid>
                          <Grid item xs={6}>
                            <Chip
                              label={moment(item.start_time).format(
                                "h:mm:ss a"
                              )}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            Day
                          </Grid>
                          <Grid item xs={6}>
                            <Chip
                              color="primary"
                              label={moment(item.start_time).format(
                                "dddd MMMM Do YYYY"
                              )}
                              sx={{ color: "white" }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            Payment
                          </Grid>
                          <Grid item xs={6}>
                            <Chip
                              color="error"
                              label={
                                item.payment_verified
                                  ? "Verified"
                                  : "Not Verified"
                              }
                              sx={{ color: "white" }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            Meeting Link
                          </Grid>
                          <Grid item xs={6}>
                            <Chip
                              color="success"
                              label={item.meeting_link ? "Join" : "NA"}
                              sx={{ color: "white" }}
                              onClick={() => {
                                if (item.meeting_link) {
                                  navigate(
                                    `/meeting/${item.meeting_link}/${item.token}/${profile.user_name}?appointment_id=${item.id}`
                                  );
                                }
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Box>
        {isMoreButton ? (
          <Button
            onClick={() => navigate("/dashboard/patient/appointments")}
            variant="contained"
            sx={{ color: "white", mt: 2 }}
          >
            View More
          </Button>
        ) : null}
      </Box>
    </>
  );
};

export default PatientAppointments;
