import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";

const CategoryFeverCard = () => {
  return (
    <>
      <Box>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={3} sx={{textAlign: 'center' }}>
              <img
                src="https://h7u5d3a4.stackpathcdn.com/assets/images/kiosk/70x70/general-physician.jpg"
                alt="Fever"
                className='w-100 max-wp100'
                style={{borderRadius:"50%"}}
              />
            </Grid>
            <Grid item xs={9} sm={9} container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{padding:2}}>
                <Typography variant="h6" component="h6" color="primary">
                  Find Your Clos
                </Typography>
                <Typography variant="p" component="p" color="primary">
                  9 Docotors Available
                </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default CategoryFeverCard;
