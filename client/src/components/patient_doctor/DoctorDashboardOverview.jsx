import React from "react";
import { Grid, Paper, Container, Typography, Box } from "@mui/material";
import Circle from "react-circle";
const DoctorFilterSearch = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" //String: Length of animation
                  responsive={true} // Boolean: Make SVG adapt to parent size
                  size={100} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={69} // Number: Update to change the progress and percentage.
                  progressColor="cornflowerblue" // String: Color of "progress" portion of circle.
                  bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                  textColor="hotpink" // String: Color of percentage text color.
                  textStyle={{
                    font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Box>
              <Typography variant="h6" component="p" align="center">
                Monthly Performance
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" //String: Length of animation
                  responsive={true} // Boolean: Make SVG adapt to parent size
                  size={150} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={69} // Number: Update to change the progress and percentage.
                  progressColor="cornflowerblue" // String: Color of "progress" portion of circle.
                  bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                  textColor="hotpink" // String: Color of percentage text color.
                  textStyle={{
                    font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Box>
              <Typography variant="h6" component="p" align="center">
                Yearly Performance
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DoctorFilterSearch;
