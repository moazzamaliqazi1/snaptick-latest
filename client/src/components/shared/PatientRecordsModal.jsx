import React from "react";
import {
  Modal,
  Box,
  Typography,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { patientRecordDoctorModal } from "../../redux/action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "75%",
    md: "85%",
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: {
    xs: 1,
    md: 4,
  },
  overflow: "auto",
};

const PatientRecordsModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const patientRecords = [
    {
      date: new Date(),
      medicne: ["panadol", "calpol"],
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
      _id: 1,
    },
    {
      date: new Date(),
      medicne: ["panadol", "calpol"],
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
      _id: 2,
    },
    {
      date: new Date(),
      medicne: ["panadol", "calpol"],
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
      _id: 3,
    },
    {
      date: new Date(),
      medicne: ["panadol", "calpol"],
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
      _id: 4,
    },
    {
      date: new Date(),
      medicne: ["panadol", "calpol"],
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
      _id: 5,
    },
  ];
  return (
    <>
      <Modal
        open={modalState.patientRecordDoctorModal}
        onClose={() => {
          dispatch(patientRecordDoctorModal(false));
        }}
        aria-labelledby="patient-records-modal-modal-title"
        aria-describedby="patient-records-modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="patient-records-modal-modal-title"
            variant="h6"
            component="h2"
          >
            Recent Records
          </Typography>
          <Box id="patient-records-modal-modal-description" sx={{ mt: 2 }}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="doctor-patient-records-swiper"
            >
              {patientRecords.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <Paper elevation={5} sx={{ padding: {
                      xs: 0,
                      md: 1
                    } }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          Date
                        </Grid>
                        <Grid item xs={12}>
                          {item.date.toString()}
                        </Grid>
                        <Grid item xs={12}>
                          Medicne
                        </Grid>
                        <Grid item xs={12}>
                          {item.medicne.map((chip, index) => {
                            return (
                              <Chip
                                key={index}
                                label={chip}
                                color="primary"
                                variant="outlined"
                                sx={{ m: 0.5 }}
                              />
                            );
                          })}
                        </Grid>
                        <Grid item xs={12}>
                          Notes
                        </Grid>
                        <Grid item xs={12}>
                          {item.notes}
                        </Grid>
                      </Grid>
                    </Paper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PatientRecordsModal;
