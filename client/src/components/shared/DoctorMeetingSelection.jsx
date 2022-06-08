import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
const DoctorMeetingSelection = (props) => {
  return (
    <>
      <Box>
        <Card sx={{backgroundColor: props.background_color ? props.background_color: 'white'}} >
          <Box>
            <CardContent>
              <Typography component="h6" variant="h6">
                {props.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Available  {props.available}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h6">
                Rs. {props.price}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default DoctorMeetingSelection;
