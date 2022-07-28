import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/picicon.png";
import icon2 from "../../images/colsizicon.png";
import icon3 from "../../images/delicon.png";
import pfImage from "../../images/pf.png";
import pbImage from "../../images/pb.png";

const MyServices = () => {
  return (
    <>
      <hr className="m-5" />
      <div className="container container-full-width section-white p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 py-2">
              <center>
                {" "}
                <h3
                  className="text-uppercase fw-bold"
                  style={{ color: "#002856" }}
                >
                  Snap Frame:
                </h3>{" "}
                <br />
                <div>
                  <img
                    src={icon1}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                    className="section-image section2-image img-fluid"
                  />
                  <p>Upload your Photo</p>
                </div>
                <div>
                  <img
                    src={icon2}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                    className="section-image section2-image img-fluid"
                  />
                  <p> Choose Size & Color</p>
                </div>
                <div>
                  <img
                    src={icon3}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                    className="section-image section2-image img-fluid"
                  />
                  <p>Frame will delivered</p>
                </div>
              </center>
            </div>
            <div className="col-md-1 col-xs-12"></div>
            <div className="col-md-7 col-xs-12 p- align-items-center">
              <center>
                {" "}
                <br />
                <img
                  className="section-image section2-image img-fluid mt-3"
                  alt=""
                  src={pfImage}
                />
                <button
                  type="button"
                  className="my-2"
                  style={{ backgroundColor: "#002856", border: "none" }}
                >
                  <Link
                    className="text-uppercase fw-bold"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "22px",
                      padding: "5px",
                    }}
                    to="/photo-frame"
                  >
                    CONTINUE FRAMING
                  </Link>
                </button>{" "}
              </center>
            </div>
          </div>
        </div>

        <div
          className="mt-2 container-fluid"
          style={{ backgroundColor: "#ffd100", color: "black" }}
        >
          <div className="row my-2 py-4">
            <div className="col-lg-4 text-center border-dark border-end ">
              <h3>REASONABLY SIZED</h3>
              <p>
                Available in standard sizes <br />10 x 8 &nbsp; & &nbsp;  14 x 12
              </p>
            </div>
            <div className="col-lg-4 text-center border-dark border-end">
              <h3>HANGABLE & STANDABLE</h3>
              <p>
                Two in One <br />
                Hangable and Standable
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <h3>REASONABLE PRICE</h3>
              <p>
                Standard Frame: 10 x 8 - Rs. 750 <br />
                Executive Frame: 14 x 12 - Rs. 1000
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* book code alter */}
      <div className="container container-full-width section-white p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 py-2">
              <center>
                {" "}
                <h3
                  className="text-uppercase fw-bold"
                  style={{ color: "#002856" }}
                >
                  Snap Book:
                </h3>{" "}
                <br />
                <div>
                  <img
                    src={icon1}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                    className="section-image section2-image img-fluid"
                  />
                  <p>Upload your Photos</p>
                </div>
                <div>
                  <img
                    src={icon3}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                    className="section-image section2-image img-fluid"
                  />
                  <p>Book will delivered</p>
                </div>
              </center>
            </div>

            <div className="col-md-1 col-xs-12"></div>

            <div className="col-md-7 col-xs-12">
              <center>
                {" "}
                <br />
                <img
                  className="section-image section2-image img-fluid my-1"
                  alt=""
                  style={{ width: "450px", height: "250px" }}
                  src={pbImage}
                />
                <button
                  type="button"
                  className="my-2"
                  style={{ backgroundColor: "#002856", border: "none" }}
                >
                  <Link
                    className="text-uppercase fw-bold"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "22px",
                      padding: "5px",
                    }}
                    to="/photo-book"
                  >
                    GET YOUR BOOK
                  </Link>
                </button>{" "}
              </center>
            </div>
          </div>
        </div>
        <br />

        <div
          className="mt-2 container-fluid"
          style={{ backgroundColor: "#ffd100", color: "black" }}
        >
          <div className="row my-2 py-4">
            <div className="col-lg-4 text-center border-dark border-end ">
              <h3>REASONABLE PRICE</h3>
              <p>Only in Rs. 700</p>
            </div>

            <div className="col-lg-4 text-center border-dark border-end">
              <h3>Up to 10 Photos</h3>
              <p>Upload Photos from your Device</p>
            </div>

            <div className="col-lg-4 text-center">
              <h3>6 X 8 Book</h3>
              <p>Get your Book in Perfect Size</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyServices;
