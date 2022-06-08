import React from "react";
import { Box, Grid, Avatar, Typography, Rating } from "@mui/material";
import PatientImage from "../../images/temp/pateint_image_one.jpg";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PropTypes from 'prop-types';

const DoctorReviewCards = () => {
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: "Very Satisfied",
    },
  };
  const IconContainer = (props) => {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  };
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={1}>
            <Avatar alt="Remy Sharp" src={PatientImage} />
          </Grid>
          <Grid item xs={12} md={11}>
              <Box sx={{ mb: 1 }}>
            <Typography variant="p" container="p">
              Very responsible, even not take extra charges for long meeting
            </Typography>
            </Box>
            <Box>
            <Rating
              name="doctot-emoji-reviews"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              disabled={true}
              sx={{
                  backgroundColor: '#00aff0',
                  p: 1
              }}
            />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DoctorReviewCards;
