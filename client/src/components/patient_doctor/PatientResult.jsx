import React from "react";
import { Container, Box, Grid, Paper } from "@mui/material";
import PatientResultCard from "../shared/PatientResultCard"
import NewsCard from "../shared/NewsCard"
const PatientResult = () => {
    return(
        <>
             <Container maxWidth="xl">
                <Paper elevation={3} sx={{ p: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9}>
                            <Box sx={{mb: 1}}>
                                <PatientResultCard/>
                            </Box>
                            <Box>
                                <PatientResultCard/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Box>
                                <NewsCard/>
                                <NewsCard/>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}

export default PatientResult;