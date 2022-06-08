import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import NoContentImage from "../../images/no-content.png";
import { useNavigate } from "react-router-dom";

const NoContent = (props) => {
  const { url, button_value, text } = props;
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={NoContentImage}
            alt="no content"
            style={{ width: "100%", maxWidth: 300 }}
          />
          <Box sx={{ mb: 2, mt: 2 }}>
            <Typography variant="h6" component="h6" color="primary">
              {text}
            </Typography>
          </Box>
          <Box>
            {button_value ? (
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "white" }}
                onClick={() => navigate(url)}
              >
                {button_value}
              </Button>
            ) : null}
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default NoContent;
