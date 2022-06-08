import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertTitle, Box, Grid, Container, Paper, Typography, Button } from "@mui/material";
import DoctorProfileImageUpload from "./DoctorProfileImageUpload";
import DoctorLanguageSkillsSet from "./DoctorLanguageSkillsSet";
import DoctorBasicInfoChange from "./DoctorBasicInfoChange";
import DoctorFeesInput from "./DoctorFeesInput";
import { ToastContainer, toast } from "react-toastify";
import { doctorPublicProfileIncomplete } from "../../constraints/index";
import Cookies from "universal-cookie";
import userAPI from "../../api/user";
import { addUser } from "../../redux/action";

const DoctorProfileSetting = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const globalMessages = useSelector((state) => state.globalMessages);
  const profile = useSelector((state) => state.user);
  const changeProfilePublished = async () => {
    try {
      if (
        !profile.name ||
        !profile.bio ||
        !profile.number ||
        profile.languages.length === 0 ||
        profile.certificates.length === 0 ||
        profile.available_timings.length === 0
      ) {
        toast.error(doctorPublicProfileIncomplete);
      } else {
        const response = await userAPI.profilePublished(true, token);
        if (response.status === 200 && response.data.is_success) {
          toast.info(response.data.message);
          dispatch(
            addUser({
              ...profile,
              is_published: response.data.data.is_published,
            })
          );
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during change profile published. Please try again");
    }
  };
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
      <Container maxWidth="xl">
        {profile.is_published ? null : (
          <Paper elevation={3} sx={{ p: 1 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                container="p"
                color="primary"
                style={{ color: "red" }}
              >
                Your profile is not found in search engine because your profile
                is not published
              </Typography>
              <Button
                variant="contained"
                style={{ color: "white" }}
                size="small"
                onClick={changeProfilePublished}
              >
                Published
              </Button>
            </Grid>
          </Paper>
        )}
        {globalMessages.doctorProfileCompleteMessage ? (
          <Alert
            severity="info"
            variant="filled"
            sx={{ marginTop: 2, marginBottom: 4 }}
          >
            <AlertTitle>Info</AlertTitle>
            {globalMessages.doctorProfileCompleteMessage}
          </Alert>
        ) : null}
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <DoctorProfileImageUpload />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <DoctorBasicInfoChange />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, mt: 5, mb: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <DoctorFeesInput />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, mt: 5, mb: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <DoctorLanguageSkillsSet />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
export default DoctorProfileSetting;
