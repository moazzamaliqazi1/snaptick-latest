import React, { useEffect, useState } from "react";
import { Container, Paper, Box, Button, Grid } from "@mui/material";
import DoctorSearchQuerySelector from "./DoctorSearchQuerySelector";
import Pagination from "@mui/material/Pagination";
import doctorAPI from "../../api/doctor";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { backdropLoaderState, setBookAppointmentForm } from "../../redux/action";
import DoctorSearchListCard from "./DoctorSearchListCard";
const SearchDoctor = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(1);
  const [doctorList, setDoctorList] = useState([]);
  const profile = useSelector((state) => state.user);
  const searchDoctorQuery = useSelector((state) => state.doctorSearch);
  const getAllDoctors = async (pages) => {
    try {
      dispatch(backdropLoaderState(true));
      const response = await doctorAPI.getAllDoctorsByQuery(
        pages ? pages: page,
        searchDoctorQuery
      );
      dispatch(backdropLoaderState(false));
      if (response.status === 200 && response.data.is_success) {
        setDoctorList(response.data.data.doctors);
        setTotalPages(response.data.data.total_pages);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
      toast.error("Sorry something went wrong");
    }
  };
  const changePage = (_event, value) => {
    setPage(value - 1);
  };
  useEffect(() => {
    getAllDoctors(null);
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    dispatch(setBookAppointmentForm({
      start_time: null,
      end_time: null,
      fee: 0,
      payment_cards_id: null,
      test_reports_id: [],
      age: 0,
      height: null
    }));
    // eslint-disable-next-line
  }, []);
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
        <Paper elevation={3} sx={{ p: 1 }}>
          <Box sx={{ mb: 2 }}>
            <DoctorSearchQuerySelector />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{ color: "white" }}
                onClick={() => {
                    setPage(0)
                    getAllDoctors(0);
                }}
              >
                Search
              </Button>
            </Grid>
          </Box>
          {doctorList.length > 0
            ? doctorList.map((item) => {
                return (
                    <DoctorSearchListCard key={item.id} doctor={item} profile={profile}/>
                );
              })
            : null}
          {doctorList.length > 0 ? (
            <Box>
              <Pagination
                count={totalPages}
                color="primary"
                onClick={changePage}
              />
            </Box>
          ) : null}
        </Paper>
      </Container>
    </>
  );
};
export default SearchDoctor;
