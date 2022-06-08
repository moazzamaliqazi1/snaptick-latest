import React from "react";
import { Box, Typography, Container } from "@mui/material";
import DoctorOneImage from "../../images/temp/doctor_one.jpg";
import DoctorTwoImage from "../../images/temp/doctor_two.jpg"
import DoctorThreeImage from "../../images/temp/doctor_three.jpg"
import DoctorFourImage from "../../images/temp/doctor_four.jpg"
import DoctorSwiperCard from "../shared/DoctorSwiperCard"
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const TopRatedDoctor = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{mb: 5}}>
          <Typography variant="h2" component="h2" align="center">
            Top Rated Doctor
          </Typography>
        </Box>
        <Box>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="doctor-list-swiper"
          >
            <SwiperSlide>
                <DoctorSwiperCard image={DoctorOneImage}/>
            </SwiperSlide>
            <SwiperSlide>
                <DoctorSwiperCard image={DoctorTwoImage}/>
            </SwiperSlide>
            <SwiperSlide>
                <DoctorSwiperCard image={DoctorThreeImage}/>
            </SwiperSlide>
            <SwiperSlide>
                <DoctorSwiperCard image={DoctorFourImage}/>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default TopRatedDoctor;
