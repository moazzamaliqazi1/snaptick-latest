import React, { useEffect } from "react";
import { Container, Box, Typography, Paper, Chip, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import patient from "../../api/patient";
import user from "../../api/user";
import Cookies from "universal-cookie";
import { useParams, useNavigate } from "react-router-dom";
import { setBookAppointmentForm, backdropLoaderState, addUser } from "../../redux/action";
import moment from "moment";
import SelectPaymentMethod from './SelectPaymentMethod'
import SelectTestReports from './SelectTestReports'
const BookAppointmentForm = () => {
  const navigate = useNavigate();
  const appointmentForm = useSelector((state) => state.appointmentForm);
  console.log(appointmentForm.start_time ? moment(appointmentForm.start_time).format("HH:mm:ss"): null)
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const params = useParams();
  const randomGetDoctorsBookingTime = async () => {
    try {
      dispatch(backdropLoaderState(true));
      const response = await patient.getRandomDoctorsBookingTime(params.doctor_id, token);
      if (response.status === 200 && response.data.is_success) {
        const doctorProfile = await getDoctorProfile()
        dispatch(setBookAppointmentForm({ ...appointmentForm, ...response.data.data, ...doctorProfile }));
      } else {
        toast.error(response.data.message);
      }
      dispatch(backdropLoaderState(false));
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
      toast.error("Error during get a time. Please try again");
    }
  };
  const getDoctorProfile = async()=>{
    try {
      const response = await user.getDoctorProfile(params.doctor_id, token);
      if (response.status === 200 && response.data.is_success) {
        return response.data.data
      } else {
        toast.error(response.data.message);
        return {}
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during get a doctor details. Please try again");
      return {}
    }
  }
  const bookAppointment = async () => {
    try {
      if(appointmentForm.start_time && appointmentForm.end_time && appointmentForm.payment_cards_id && appointmentForm.age > 0){
        dispatch(backdropLoaderState(true));
        const response = await patient.bookAppointment({...appointmentForm, patient_id: profile._id}, token);
        if (response.status === 200 && response.data.is_success) {
          dispatch(addUser(response.data.data.user));
          navigate('/dashboard/patient/appointments')
        } else {
          toast.error(response.data.message);
        }
        dispatch(backdropLoaderState(false));
      }
      else {
        toast.error('Some required fields are missing. Please make sure that you provide card, age')
      }
    } catch (error) {
      console.log(error);
      toast.error("Error to get a appointment, please try again");
      return {}
    }
  }
  useEffect(() => {
    randomGetDoctorsBookingTime();
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
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="p"
              component="p"
              color="primary"
              sx={{ mb: 1 }}
            >
              {appointmentForm.start_time && appointmentForm.end_time
                ? `Agent set the below timings for you. If you not available then please select other doctor.`
                : "Sorry agent could not find any time for book today and tomorrow. Please select another doctor"}
            </Typography>
            {appointmentForm.start_time && appointmentForm.end_time ? (
              <>
                <Box>
                  <Chip label='Date' color="primary" sx={{ color: "white", mr: 1, mb: 1, backgroundColor: '#90ee90' }}/>
                  <Chip label={`${moment(appointmentForm.start_time).format("DD MM YYYY")}`} color="primary" sx={{ color: "white", mb: 1, backgroundColor: '#90ee90' }}/>
                </Box>
                <Box>
                  <Chip label='Time' color="primary" sx={{ color: "white", mr: 1, mb: 1, backgroundColor: '#90ee90' }}/>
                  <Chip
                  label={`${appointmentForm.start_time.toString().substring(11, 19)} - ${
                    appointmentForm.end_time.toString().substring(11, 19)}`}
                  sx={{ color: "white", mb: 1, backgroundColor: '#90ee90' }}
                />
                </Box>
              </>
            ) : null}
          </Box>
          <Box sx={{ mb: 2 }}>
            {appointmentForm.start_time && appointmentForm.end_time? <SelectPaymentMethod/>: null}
          </Box>
          <Box sx={{ mb: 2 }}>
            {appointmentForm.start_time && appointmentForm.end_time? <SelectTestReports/>: null}
          </Box>
          <Box sx={{ mb: 2 }}>
            {appointmentForm.start_time && appointmentForm.end_time? (
              <TextField label="Age" variant="standard" value={appointmentForm.age} type="number" onChange={(event)=>{
                dispatch(setBookAppointmentForm({ ...appointmentForm, age: event.target.value }))
              }} fullWidth/>
            ): null}
          </Box>
          <Box sx={{ mb: 2 }}>
            {appointmentForm.start_time && appointmentForm.end_time? (
              <Typography variant="p" component="p" color="primary" sx={{ color: "white", backgroundColor: '#90ee90', p: 1 }}>
                Please record a video during a meeting with the doctor, So if doctor came 15 minutes late so you can send the video to our platform and we return your fee after verifications.
              </Typography>
            ): null}
          </Box>
          <Box sx={{ mb: 2 }}>
            {appointmentForm.start_time && appointmentForm.end_time? <Button variant="contained" color="primary" sx={{color: 'white'}} onClick={bookAppointment}>Book Now</Button>: null}
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default BookAppointmentForm;
