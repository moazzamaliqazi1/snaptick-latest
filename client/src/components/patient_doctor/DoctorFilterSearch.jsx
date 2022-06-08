import React from "react";
import {
  Box,
  Grid,
  Paper,
  Container,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
const DoctorFilterSearch = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <Box>
                    <TextField
                      variant="standard"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchSharpIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ color: "white" }}
                      fullWidth
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Button variant="contained" sx={{ m: 1 }} size="small" color="secondary">
                    Progress
                  </Button>
                  <Button variant="contained" sx={{ m: 1 }} size="small" color="secondary">
                    Comming
                  </Button>
                  <Button variant="contained" sx={{ m: 1 }} size="small" color="secondary">
                    Done
                  </Button>
                  <Button variant="contained" sx={{ m: 1 }} size="small" color="secondary">
                    All
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DoctorFilterSearch;
