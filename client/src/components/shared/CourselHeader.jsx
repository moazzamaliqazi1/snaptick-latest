import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import AIMainBannerImage from "../../images/AI_Main_Banner_Assistant_Robot.jpg";
// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation, Autoplay]);

const CourselHeader = () => {
  return (
    <>
      <Box>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          className="patient-coursel-swiper"
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
        >
          <Box
            slot="container-start"
            className="parallax-bg"
            style={{ backgroundImage: `url(${AIMainBannerImage})` }}
            data-swiper-parallax="-23%"
          ></Box>
          <SwiperSlide>
            <Box className="title" data-swiper-parallax="-300">
              Slide 1
            </Box>
            <Box className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </Box>
            <Box className="text" data-swiper-parallax="-100">
              <Typography variant="p" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="title" data-swiper-parallax="-300">
              Slide 2
            </Box>
            <Box className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </Box>
            <Box className="text" data-swiper-parallax="-100">
              <Typography variant="p" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="title" data-swiper-parallax="-300">
              Slide 3
            </Box>
            <Box className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </Box>
            <Box className="text" data-swiper-parallax="-100">
              <Typography variant="p" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};
export default CourselHeader;
