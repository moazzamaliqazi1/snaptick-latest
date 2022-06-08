import React from "react";
import { Box, Grid, Rating, Typography, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
const DoctorSwiperCard = (props) => {
  const { image } = props;
  return (
    <>
      <Box>
        <Box
          style={{
            position: "relative",
            zIndex: 1,
            top: 35,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Rating name="read-only" value={2} readOnly sx={{ pl: 2 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="p"
                component="p"
                align="right"
                sx={{ pr: 2 }}
              >
                <Tooltip
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat."
                  arrow
                >
                  <InfoIcon color="primary" />
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <img src={image} alt="Hamza" />
      </Box>
    </>
  );
};
export default DoctorSwiperCard;
