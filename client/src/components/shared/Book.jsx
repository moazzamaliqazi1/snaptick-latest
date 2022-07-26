import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MultiImageInput from "react-multiple-image-input";
import icon1 from "../../images/picicon.png";
import icon2 from "../../images/colsizicon.png";
import icon3 from "../../images/delicon.png";
import pbImage from "../../images/pb.png";
import Cookies from "universal-cookie";
import user from "../../api/user";
function DataURIToBlob(dataURI) {
  const splitDataURI = dataURI.split(",");
  const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
}
const Book = () => {
  const [images, setImages] = useState({});
  const cookies = new Cookies();
  const token = cookies.get("token");
  const crop = {
    unit: "%",
    aspect: 3 / 4,
    width: "100",
  };
  const uploadImages = async () => {
    try {
      const data = new FormData();
      for (const [index, image] of Object.entries(images)) {
        const file = DataURIToBlob(image)
        data.append("image", file, `${index}_new_pic.jpeg`);
      }
      const response = await user.addToCart(data, token);
      if (response.status === 200 && response.data.is_success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
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

          <div className="col-md-9 ml-5 pl-5">

            <h3
              className="text-uppercase fw-bold"
              style={{ color: "#003690" }}
            >
              upload upto 10 images:
            </h3>
            <MultiImageInput
              images={images}
              setImages={setImages}
              cropConfig={{ crop, ruleOfThirds: true }}
              max={10}
              theme="light"
            />

            <button onClick={uploadImages} className=" py-2 px-3" style={{ float: 'right', color: 'white', backgroundColor: '#003690' }}>Add to Cart</button>

          </div>
        </div>
      </div>

    </>
  );
};

export default Book;