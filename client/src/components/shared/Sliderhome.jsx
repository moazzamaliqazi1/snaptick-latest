import React from 'react';
import bannerImage1 from "../../images/bt1.jpg"
import bannerImage2 from "../../images/bt2.jpg"

const SliderHome = () => {
  return (
    <>
      <div>
        <div id="carouselExampleControls" className="carousel slide p-2" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ padding: "77px 0 0" }}>
              <img src={bannerImage1} className="d-block w-100" alt="frame" style={{ border: "0.1px solid gray" }} />
            </div>
            <div className="carousel-item">
              <img src={bannerImage2} className="d-block w-100" alt="book" />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default SliderHome