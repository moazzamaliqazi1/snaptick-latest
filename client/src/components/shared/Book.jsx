import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MultiImageInput from "react-multiple-image-input";
import book from "../../images/book (2).jpg";
import book1 from "../../images/book (4).jpg";
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
          <div className="col-md-3">
            <center>
              {" "}
              <br />
              <div>
                <img
                  src={book}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                  className="section-image section2-image img-fluid"
                />
              </div>
              <div>
                <img
                  src={book1}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                  className="section-image section2-image img-fluid"
                />
              </div>
            </center>
          </div>

          <div className="col-md-8 ml-5 pl-5 mt-4">

            <h3
              className="text-uppercase fw-bold"
              style={{ color: "#002856" }}
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

            <button onClick={uploadImages} className=" py-2 px-3" style={{ float: 'right', color: 'white', backgroundColor: '#002856' }}><a onClick={() => window.location.replace("/")} style={{color: 'white'}}>Add to Cart</a></button>

          </div>
        </div>
      </div>

    </>
  );
};

export default Book;