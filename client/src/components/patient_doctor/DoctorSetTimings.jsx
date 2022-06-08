import React, { useState, forwardRef, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, backdropLoaderState } from "../../redux/action";
import user from "../../api/user";
import Cookies from "universal-cookie";
import Select from "react-select";
import { daysSelector } from "../../constraints/index";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import AddIcon from "@mui/icons-material/Add";
import MuiAlert from "@mui/material/Alert";
import NoContent from "../shared/NoContent";
import moment from "moment";
import ReactDataGrid from "@inovua/reactdatagrid-community";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const gridStyle = { minHeight: 550 };
const DoctorSetTimings = () => {
  const dispatch = useDispatch();
  const [dayTime, setDayTime] = useState({
    day: "",
    fromTime: new Date(),
    toTime: new Date(),
  });
  const cookies = new Cookies();
  const token = cookies.get("token");
  const profile = useSelector((state) => state.user);
  const [rows, setRows] = useState([]);
  const columns = [
    {
      name: "day",
      header: "Day",
      defaultFlex: 1,
    },
    {
      name: "from",
      header: "From",
      type: "date",
      defaultFlex: 1,
    },
    {
      name: "to",
      header: "To",
      type: "date",
      defaultFlex: 1,
    },
    {
      name: "action",
      header: "Action",
      defaultFlex: 1,
      render: (props) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ color: "white" }}
            onClick={() => {
              deleteAvailableTiming(props.value);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const deleteAvailableTiming = async (_id) => {
    try {
      dispatch(backdropLoaderState(true));
      const response = await user.deleteAvailableTiming(_id, token);
      dispatch(backdropLoaderState(false));
      if (response.status === 200 && response.data.is_success) {
        toast.info(response.data.message);
        dispatch(addUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
      toast.error("Error during delete available timing. Please try again");
    }
  };

  const saveTime = async () => {
    try {
      if (dayTime.day) {
        dispatch(backdropLoaderState(true));
        const response = await user.saveAvailableTime(dayTime, token);
        dispatch(backdropLoaderState(false));
        if (response.status === 200 && response.data.is_success) {
          toast.success(response.data.message);
          dispatch(addUser(response.data.data));
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Please select a day");
      }
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
      toast.error(error.message);
    }
  };
  const setRowsTimings = () => {
    const timeArr = [];
    for (const time of profile.available_timings) {
      timeArr.push({
        ...time,
        id: time._id,
        from: moment(time.from).format("HH:mm:ss"),
        to: moment(time.to).format("HH:mm:ss"),
        action: time._id,
      });
    }
    setRows(timeArr);
  };
  useEffect(() => {
    if (profile.available_timings) {
      setRowsTimings();
    }
    // eslint-disable-next-line
  }, [profile.available_timings]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Container maxWidth="xl">
        <Box>
          <Paper elevation={3} sx={{ p: 1, mb: 3 }}>
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography container="p" variant="p" sx={{ color: "white" }}>
                Select Day and Time (If you select day that you already done
                then our agent is automatically update it)
              </Typography>
            </Alert>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  name="days"
                  options={daysSelector}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(event) => {
                    setDayTime({
                      ...dayTime,
                      day: event.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography container="p" variant="p" color="primary">
                  From
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticTimePicker
                    displayStaticWrapperAs="mobile"
                    value={dayTime.fromTime}
                    onChange={(value) => {
                      setDayTime((prev) => {
                        return {
                          ...prev,
                          fromTime: value,
                        };
                      });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography container="p" variant="p" color="primary">
                  To
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticTimePicker
                    displayStaticWrapperAs="mobile"
                    value={dayTime.toTime}
                    onChange={(value) => {
                      setDayTime((prev) => {
                        return {
                          ...prev,
                          toTime: value,
                        };
                      });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  style={{ color: "white" }}
                  endIcon={<AddIcon />}
                  onClick={saveTime}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
          {profile.available_timings && profile.available_timings.length > 0 ? (
            <Paper elevation={3} sx={{ p: 1, mt: 5 }}>
              <ReactDataGrid
                idProperty="id"
                columns={columns}
                dataSource={rows}
                style={gridStyle}
                pagination
                defaultLimit={10}
              />
            </Paper>
          ) : (
            <Box sx={{ height: 500, mt: 5 }}>
              <NoContent
                url={null}
                button_value={null}
                text="Please set your available time"
              />
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};
export default DoctorSetTimings;
