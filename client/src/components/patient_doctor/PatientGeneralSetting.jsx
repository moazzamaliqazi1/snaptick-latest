import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Switch,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { addUser } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import user from "../../api/user";
import { SocialLinks } from "social-links";

const PatientGeneralSetting = () => {
  const [expanded, setExpanded] = useState(false);
  const socialLinks = new SocialLinks();
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const socialInput = (event) => {
    dispatch(
      addUser({
        ...profile,
        social: {
          ...profile.social,
          [event.target.name]: event.target.value,
        },
      })
    );
  };
  const saveSocialLinks = async () => {
    try {
      let isSocialFacebookValid = true;
      let isSocialInstagramValid = true;
      if (profile.social && profile.social.facebook) {
        isSocialFacebookValid = socialLinks.isValid(
          "facebook",
          profile.social.facebook
        );
      }
      if (profile.social && profile.social.instagram) {
        isSocialInstagramValid = socialLinks.isValid(
          "instagram",
          profile.social.instagram
        );
      }
      if (
        profile.social &&
        (profile.social.facebook || profile.social.instagram)
      ) {
        if (isSocialFacebookValid && isSocialInstagramValid) {
          const response = await user.saveProfileInfo(
            {
              type: "social-links",
              social_links: profile.social,
            },
            token
          );
          if (response.status === 200 && response.data.is_success) {
            toast.info(response.data.message);
            dispatch(addUser(response.data.data));
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("One of social media link is not valid");
        }
      } else {
        toast.error("Please add any one social media link");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during save a social information. Please try again");
    }
  };
  const saveGeneralSetting = async (event) => {
    try {
      const response = await user.saveProfileInfo(
        {
          type: "general-setting",
          setting: {
            [event.target.name]: event.target.checked,
          },
        },
        token
      );
      if (response.status === 200 && response.data.is_success) {
        dispatch(addUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during save a basic information. Please try again");
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
      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>General settings</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ w: "100%" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Do you want to show your email</Typography>
              <Switch
                {...label}
                name="email_visible"
                checked={
                  profile.setting && profile.setting.email_visible
                    ? profile.setting.email_visible
                    : false
                }
                onChange={saveGeneralSetting}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Do you want to show your number</Typography>
              <Switch
                {...label}
                name="number_visible"
                checked={
                  profile.setting && profile.setting.number_visible
                    ? profile.setting.number_visible
                    : false
                }
                onChange={saveGeneralSetting}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>
                Do you want to show your profile as public
              </Typography>
              <Switch
                {...label}
                name="profile_visible"
                checked={
                  profile.setting && profile.setting.profile_visible
                    ? profile.setting.profile_visible
                    : false
                }
                onChange={saveGeneralSetting}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>
                Do you want to show your social media links
              </Typography>
              <Switch
                {...label}
                name="social_visible"
                checked={
                  profile.setting && profile.setting.social_visible
                    ? profile.setting.social_visible
                    : false
                }
                onChange={saveGeneralSetting}
              />
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>Social Links</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box fullWidth sx={{ mb: 2, mt: 2 }}>
              <Input
                value={
                  profile.social && profile.social.facebook
                    ? profile.social.facebook
                    : ""
                }
                startAdornment={
                  <InputAdornment position="start">
                    <FacebookIcon />
                  </InputAdornment>
                }
                label="Facebook"
                name="facebook"
                onChange={socialInput}
                fullWidth
              />
            </Box>
            <Box fullWidth sx={{ mb: 2, mt: 2 }}>
              <Input
                value={
                  profile.social && profile.social.instagram
                    ? profile.social.instagram
                    : ""
                }
                startAdornment={
                  <InputAdornment position="start">
                    <Instagram />
                  </InputAdornment>
                }
                label="Instagram"
                name="instagram"
                onChange={socialInput}
                fullWidth
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ color: "white" }}
                onClick={saveSocialLinks}
                fullWidth
              >
                Save
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default PatientGeneralSetting;
