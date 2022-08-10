import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import rating from "../../images/rating.png"

const ReviewBanner = () => {
    return (
        <>
            <div className='m-5'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <center>
                            <div className='container' style={{ color: '#002856' }}>
                                <div className='row'>
                                    <div className='col-md-12 mt-2'>
                                        <img src={rating} style={{ width: '200px', height: '150px' }} />
                                        <h3 className='fw-bold mt-2'>UMAR NASIR</h3>
                                        <h4>Great quality for the price!</h4>
                                        <h6>"I was so impressed with the quality of the prints as well as the framing. <br />My photos came within the same week of my order in perfect condition with hanging pieces. <br />Love and will use again!"</h6>
                                    </div>
                                </div>

                            </div>
                        </center>
                    </SwiperSlide>
                    <SwiperSlide>
                        <center>
                            <div className='container' style={{ color: '#002856' }}>
                                <div className='row'>
                                    <div className='col-md-12 mt-2'>
                                        <img src={rating} style={{ width: '200px', height: '150px' }} />
                                        <h3 className='fw-bold mt-2'>SYED YASIR ABBASS</h3>
                                        <h4>Beautiful!</h4>
                                        <h6>"I got this as a gift for a friend and the quality was great and <br />it turned out beuaitful! Highly recommend!"</h6>
                                    </div>
                                </div>

                            </div>
                        </center>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default ReviewBanner


