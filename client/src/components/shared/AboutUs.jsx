import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import aboutus from "../../images/aboutus.jpg";
import aboutus2 from "../../images/aboutus2.jpg";

const About = () => {
    return (
        <>

            <div className="container-fluid pb-2 mb-3 p-5" style={{ backgroundColor: '#002856' }}>
                <h3 className=" section-text section-hi text-uppercase fw-bold"
                    style={{
                        color: '#ffd100', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
                        textAlign: 'center', fontSize: '30px', margin: '20px'
                    }} >Hi, we're SnapTick.</h3>
                <h3 className=" section-text section-hi"
                    style={{
                        color: 'white', fontFamily: 'georgia',
                        textAlign: 'center', fontSize: '25px', margin: '25px'
                    }} >
                    We believe that the photos on your phone deserve to be celebrated.  They don’t have to be perfect.
                    You don’t have to look flawless.  If the photo is meaningful to you,  it’s meant to be on your wall or in a book. </h3>

            </div>

            <div className='container mt-5 pt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={aboutus} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={aboutus2} />
                            </SwiperSlide>
                        </Swiper>
                    
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6'>
                        <h3 className=" section-text section-hi my-5 pt-2"
                            style={{
                                fontFamily: 'value-sans-regular, sans-serif',
                                fontSize: '22px',
                                fontWeight: '400',
                                textAlign: 'justify',
                                lineHeight: '1.7'
                            }} >
                            In 2021, We took great pictures in Northern Pakistan.
                            We thought framing these moments would make the perfect gift so We set out to design an platform that made
                            framing simple, fun and affordable. Our platform provides Frames & Books. We have partnered with a workshop in Lahore known for its high
                            quality and craftsmanship, allowing us to deliver a quality product at a friendly price.
                            <br />
                            <br />
                            Keep smiling!
                            <br />
                            <b>MOAZZAM ALI | ARSLAN SALEEM</b><br />
                            Founder of SnapTick
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About


