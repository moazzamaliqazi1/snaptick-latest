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
                  style={{ color: "#003690" }}
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
                  className="section-image section2-image img-fluid my-1"
                  alt=""
                  src={pfImage}
                />
                <button
                  type="button"
                  className="my-2"
                  style={{ backgroundColor: "#003690", border: "none" }}
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
          style={{ backgroundColor: "#ffb703", color: "black" }}
        >
          <div className="row my-2 py-4">
            <div className="col-lg-4 text-center border-dark border-end ">
              <h3>REASONABLY SIZED</h3>
              <p>
                Available in 6x6 <br /> & 8x8 Frame Sizes
              </p>
            </div>
            <div className="col-lg-4 text-center border-dark border-end">
              <h3>REMOVEABLE</h3>
              <p>
                Easy to paste anytime anywhere <br /> without damaging your
                walls
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <h3>REUSABLE</h3>
              <p>
                You can change things up by <br />
                rearranging the frames to your liking
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
                  style={{ color: "#003690" }}
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
                  style={{ backgroundColor: "#003690", border: "none" }}
                >
                  <Link
                    className="text-uppercase fw-bold"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "22px",
                      padding: "5px",
                    }}
                    to="/book"
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
          style={{ backgroundColor: "#ffb703", color: "black" }}
        >
          <div className="row my-2 py-4">
            <div className="col-lg-4 text-center border-dark border-end ">
              <h3>Cheap Price</h3>
              <p>Only in 500 Rs</p>
            </div>

            <div className="col-lg-4 text-center border-dark border-end">
              <h3>Up to 15 Photos</h3>
              <p>Select Photos from your Device</p>
            </div>

            <div className="col-lg-4 text-center">
              <h3>4 X 6 Book</h3>
              <p>Get your Book in Perfect Size</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyServices;
