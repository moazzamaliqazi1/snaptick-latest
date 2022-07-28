import React from 'react';
import frameOneImage from '../../images/frames (1).jpg'
import frameTwoImage from '../../images/frames (2).jpg'
import frameThreeImage from '../../images/frames (3).jpg'
import frameFourImage from '../../images/frames (4).jpg'
import bookOneImage from '../../images/book (1).jpg'
import bookTwoImage from '../../images/book (2).jpg'
import bookThreeImage from '../../images/book (3).jpg'
import bookFourImage from '../../images/book (4).jpg'

const About = () => {
  return (
    <>

      <hr className="m-5" />
      <div className="container-fluid pb-2 mb-3 p-5" style={{ backgroundColor: '#002856' }}>
        <h3 className=" section-text section-hi text-uppercase fw-bold"
          style={{
            color: '#ffd100', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
            textAlign: 'center', fontSize: '30px', margin: '20px'
          }} >Hi, we're SnapTick.</h3>
        <h3 className=" section-text section-hi"
          style={{
            color: 'white', fontFamily: 'georgia' ,
            textAlign: 'center', fontSize: '25px',  margin: '25px'
          }} >
          We believe that the photos on your phone deserve to be celebrated.  They don’t have to be perfect.
          You don’t have to look flawless.  If the photo is meaningful to you,  it’s meant to be on your wall or in a book. </h3>

      </div>
      {/* next */}
      <div className="container container-full-width section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={frameOneImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={frameTwoImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={frameThreeImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={frameFourImage} />
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      <div className="container container-full-width section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={bookOneImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={bookTwoImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={bookThreeImage} />
            </div>
            <div className="col-md-3 col-xs-12 p-3">
              <img className="section-image section2-image img-fluid" alt="" src={bookFourImage} />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default About


