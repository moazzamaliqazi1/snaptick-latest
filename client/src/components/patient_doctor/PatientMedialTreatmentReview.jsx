import React from "react";
import { Box, Grid, Paper, Avatar, Typography, Button } from "@mui/material";
import PatientImage from "../../images/temp/pateint_image_one.jpg";
import moment from "moment";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import NoContent from "../shared/NoContent";
const medicineColumns = [
  {
    name: "medicine_name",
    header: "Name",
    defaultFlex: 1,
  },
  {
    name: "medicine_days",
    header: "Days",
    defaultFlex: 1,
  },
  {
    name: "description",
    header: "Description",
    defaultFlex: 1,
  },
];
const medicineRows = [
  {
    id: 1,
    medicine_name: "Parasol",
    medicine_days: 5,
    description: "3 times a day",
  },
  {
    id: 2,
    medicine_name: "Calpol",
    medicine_days: 2,
    description: "2 times a day",
  },
  {
    id: 3,
    medicine_name: "Anti-Bio",
    medicine_days: 1,
    description: "1 times a day",
  },
];
const gridStyle = { minHeight: 260 };

const PatientMedialTreatmentReview = (props) => {
  const { limit, isMoreButton, isLimit } = props;
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (profile.jwt_token === token) {
    return (
      <>
        <Box>
          <Paper elevation={5} sx={{ p: 1, mb: 3 }}>
            <Typography variant="h6" component="h6" color="primary">
              Recent Treatment
            </Typography>
          </Paper>
          {[0, 1, 2, 3]
            .slice(0, isLimit ? limit : [0, 1, 2, 3].length)
            .map((item) => {
              return (
                <Paper elevation={5} sx={{ p: 1, mb: 3 }} key={item}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Box sx={{ mr: 1 }}>
                      <Avatar alt="Remy Sharp" src={PatientImage} />
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h6" color="primary">
                        Remy Shar
                      </Typography>
                      <Typography variant="p" component="p" color="primary">
                        {moment(new Date()).format(
                          "dddd MMMM Do YYYY, h:mm:ss a"
                        )}
                      </Typography>
                    </Box>
                  </Grid>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" component="h6" color="primary">
                      Medicine
                    </Typography>
                  </Box>
                  <Box>
                    <ReactDataGrid
                      idProperty="id"
                      columns={medicineColumns}
                      dataSource={medicineRows}
                      style={gridStyle}
                      pagination
                      defaultLimit={10}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      onClick={() =>
                        navigate(`/dashboard/patient/${item}/book-appointment`)
                      }
                      variant="contained"
                      sx={{ color: "white", m: 1, ml: 0 }}
                    >
                      Again Appointment
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ color: "white", m: 1, ml: 0 }}
                      onClick={() =>
                        navigate(`/dashboard/patient/appointments/${item}/details`)
                      }
                    >
                      Notes
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ color: "white", m: 1, ml: 0 }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </Paper>
              );
            })}
          {isMoreButton ? (
            <Button
              onClick={() =>
                navigate("/dashboard/patient/profile/medical-treatment")
              }
              variant="contained"
              sx={{ color: "white" }}
            >
              View More
            </Button>
          ) : null}
        </Box>
      </>
    );
  } else {
    return (
      <Box sx={{ height: 500, mt: 5 }}>
        <NoContent
          url="/"
          button_value="Go Back to Home"
          text="You have not permitted to see this page"
        />
      </Box>
    );
  }
};
export default PatientMedialTreatmentReview;
