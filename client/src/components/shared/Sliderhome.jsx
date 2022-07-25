import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerImage1 from "../../images/bt1.jpg"
import bannerImage2 from "../../images/bt2.jpg"

import { Autoplay, Pagination, Navigation } from "swiper";

const SliderHome = () => {
  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bannerImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImage2} />
        </SwiperSlide>
      </Swiper>

    </>
  )
}
export default SliderHome