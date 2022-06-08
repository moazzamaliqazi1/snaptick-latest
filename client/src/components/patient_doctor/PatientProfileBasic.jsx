import React from "react";
import {
  Box,
  Grid,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useSelector } from "react-redux";
import backgroundImage from "../../images/login-background.jpg";
import IconButton from "@mui/material/IconButton";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import NoContentImage from "../shared/NoContent";
import Cookies from "universal-cookie";

const PatientProfileBasic = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const profile = useSelector((state) => state.user);
  const SocialLinks = () => {
    if (
      profile.setting &&
      (profile.setting.social_visible || profile.token === token) &&
      profile.social &&
      (profile.social.facebook || profile.social.instagram)
    ) {
      return (
        <>
          {Object.keys(profile.social).map((object, index) => {
            return (
              <Box key={index}>
                {object === "facebook" ? (
                  <FacebookIcon
                    sx={{ mr: Object.keys(profile.social)[index + 1] ? 1 : 0 }}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/${profile.social[object]}`
                      )
                    }
                  />
                ) : (
                  <Instagram
                    sx={{ mr: Object.keys(profile.social)[index + 1] ? 1 : 0 }}
                    onClick={() =>
                      window.open(
                        `https://www.instagram.com/${profile.social[object]}`
                      )
                    }
                  />
                )}
              </Box>
            );
          })}
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <Box>
        <Grid container ustifyContent="center">
          <Grid item xs={12} md={3}>
            <ImageListItem
              sx={{
                width: {
                  xs: 250,
                  sm: 300,
                },
                height: 300,
              }}
            >
              <img
                src={`${
                  profile.profile_image
                    ? profile.profile_image
                    : backgroundImage
                }?w=248&fit=crop&auto=format`}
                srcSet={`${
                  profile.profile_image
                    ? profile.profile_image
                    : backgroundImage
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={profile.user_name}
                loading="lazy"
              />
              <ImageListItemBar
                title={profile.user_name}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about`}
                  >
                    <SocialLinks />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={9}>
            {profile.bio ? (
              <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
            ) : (
              <NoContentImage
                url="/dashboard/patient/profile/setting"
                button_value="Add Bio"
                text="No Bio Found About You"
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PatientProfileBasic;
