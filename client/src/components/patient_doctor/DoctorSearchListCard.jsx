import React from "react";
import { Grid, Box, Paper, Typography, Chip, Button } from "@mui/material";
import backgroundImage from "../../images/login-background.jpg";
import NoContentImage from "../shared/NoContent";
import { useNavigate } from "react-router-dom";
import { FileIcon, defaultStyles } from "react-file-icon";
const DoctorSearchListCard = (props) => {
  const { doctor, profile } = props;
  const navigate = useNavigate();
  return (
    <>
      <Paper elevation={3} sx={{ p: 1, mb: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button variant="contained" size="large" color={profile.payment_cards && profile.payment_cards.length > 0 ? 'primary': 'secondary'} sx={{color: 'white'}} onClick={()=>navigate(profile.payment_cards && profile.payment_cards.length > 0 ? `/dashboard/patient/${doctor._id}/book-appointment`: '/dashboard/patient/payment-card')}>
            {profile.payment_cards && profile.payment_cards.length > 0 ? "Book Appointment" : "Please First Add Payment Card"}
          </Button>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box>
              <img
                src={
                  doctor.profile_image ? doctor.profile_image : backgroundImage
                }
                alt="doctor"
                style={{ width: "100%", maxWidth: "250px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h6"
              component="h6"
              color="primary"
              sx={{ mb: 1 }}
            >
              {doctor.name}
            </Typography>
            {doctor.bio ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: doctor.bio }} />
              </>
            ) : (
              <NoContentImage
                url={null}
                button_value={null}
                text={`${doctor.name} has not set bio yet`}
              />
            )}
            <Typography
              variant="h6"
              component="h6"
              color="primary"
              sx={{ mb: 1, mt: 1 }}
            >
              Languages{" "}
              {doctor.languages.length > 0
                ? doctor.languages.map((item, index) => {
                    return (
                      <Box key={index} sx={{ mb: 1 }}>
                        <Chip label={item.value} />
                      </Box>
                    );
                  })
                : `${doctor.name} not specify any languages`}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              color="primary"
              sx={{ mb: 2, mt: 1 }}
            >
              Certificates
            </Typography>
            {doctor.certificates.length > 0
              ? doctor.certificates.map((file, index) => {
                  return (
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      sx={{ mb: 2, cursor: "pointer" }}
                      onClick={() => {
                        navigate(
                          `/file-view/${file.key.split("/").pop()}/${file.ext}`
                        );
                      }}
                      key={index}
                    >
                      <Box sx={{ width: 40, mr: 1 }}>
                        <FileIcon
                          extension={file.ext}
                          style={{ width: 20 }}
                          {...defaultStyles[file.ext]}
                        />
                      </Box>
                      <Typography variant="p" component="span" color="primary">
                        {file.key.split("/").pop()}
                      </Typography>
                    </Grid>
                  );
                })
              : `${doctor.name} has not uploaded any certificates yet.`}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default DoctorSearchListCard;
