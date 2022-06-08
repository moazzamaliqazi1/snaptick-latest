import React from "react";
import { Box, Typography, Grid, Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { locations } from "../../constraints/index";
const TopRatedDoctor = () => {
  const defaultProps = {
    options: locations,
    getOptionLabel: (option) => option.city,
  };

  return (
    <>
      <Grid
        sx={{ backgroundColor: "#00aff0", height: 300 }}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h4" component="h6" sx={{ color: "white"}}>
            Find Your Closet Doctor
          </Typography>
        </Box>
        <Box sx={{ color: "white", marginTop:3  }}>
          <Grid container spacing={0} sx={{backgroundColor: 'white', borderRadius: 8, width: {
            xs: 300,
            sm: 400,
            md: 600
          }, paddingLeft: 2, paddingRight: 2, paddingbottom: 3}}>
            <Grid item xs={4}>
              <Autocomplete
                {...defaultProps}
                renderInput={(params) => (
                  <TextField {...params} label="City" variant="standard" color="secondary"/>
                )}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Search For Doctors"
                variant="standard"
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{bgcolor : "blue", borderRadius: 8}}/>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
export default TopRatedDoctor;
