import React from 'react';

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import whatsapp from '../../images/whatsapp.png'

import p11 from '../../images/1-1.jpg'
import p12 from '../../images/1-2.jpg'
import p13 from '../../images/1-3.jpg'
import p14 from '../../images/1-4.jpg'

import p31 from '../../images/3-1.jpg'
import p32 from '../../images/3-2.jpg'
import p33 from '../../images/3-3.jpg'
import p34 from '../../images/3-4.jpg'

import p41 from '../../images/4-1.jpg'
import p42 from '../../images/4-2.jpg'
import p43 from '../../images/4-3.jpg'
import p44 from '../../images/4-4.jpg'
const Photographer = () => {
    return (
        <>
            <div className='col-md-12'>
                <center>
                    <h1 className='text-uppercase fw-bold' style={{ color: '#002856' }}>Ruby'Z Studio</h1>
                    <p>@Rubyzphotos  · Photographer / Cinematographer 🇵🇰</p>

                    <a href='https://api.whatsapp.com/send?phone=03124288806' target='blank'><img src={whatsapp} className='mr-3' alt="" width={'30px'}></img></a>
                    <a href='https://www.facebook.com/Rubyzphotos/' target='blank'><img src={facebook} alt="" className='' width={'30px'}></img></a>
                    <a href='https://www.instagram.com/rubyzstudio/' target='blank'><img src={instagram} alt="" className='ml-3' width={'30px'}></img></a>
                    <br></br>
                    <br></br>


                    <h5 className='text-uppercase' style={{ marginLeft: '150px', marginRight: '150px' }}>THE LARGEST PHOTOGRAPHY STUDIO OF PAKISTAN, PROVIDING ALL PHOTOGRAPHY SERVICES UNDER ONE ROOF.
                        The innovative blend of art and technology, expressions and backgrounds, lighting and angles makes us the most appreciated photography studio not only by our
                        everyday customers but also by celebrities and luminaries around the globe. <br />EXPERIENCE THE FINEST WEDDING PHOTOGRAPHY IN TOWN.</h5>
                </center>
            </div>

            <div className="container container-full-width section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p11} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p12} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p13} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p14} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container container-full-width section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p31} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p32} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p33} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p34} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container container-full-width section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p41} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p42} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p43} />
                        </div>
                        <div className="col-md-3 col-xs-12 p-3">
                            <img className="section-image section2-image img-fluid" alt="" src={p44} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Photographer