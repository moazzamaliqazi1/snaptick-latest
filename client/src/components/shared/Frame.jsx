import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import frames4 from "../../images/frames4.jpg";
import frames3 from "../../images/frames3.jpg";
import frames1 from "../../images/frames1.jpg";
import frames5 from "../../images/frames5.jpg";
import AvatarEditor from "react-avatar-editor";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const framing = ["frame1", "frame2", "frame3", "frame4", "frame5", "frame6"];
const Frame = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editorState, setEditorState] = useState(null);
  const setCropImage = async () => {
    try {
      if (editorState) {
        const dataUrl = editorState.getImage().toDataURL();
        const result = await fetch(dataUrl);
        const blob = await result.blob();
        setSelectedImage(blob)
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedImage ? (
            <>
              <AvatarEditor
                ref={(editor) => setEditorState(editor)}
                image={URL.createObjectURL(selectedImage)}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
              />
              <Button onClick={setCropImage}>Done</Button>
            </>
          ) : null}
        </Box>
      </Modal>
      { selectedImage ? null: <center>
        <div
          className="container-fluid col-md-12 py-2"
          style={{ borderStyle: "solid", border: "5px" }}
        >
          <h1 style={{ color: "#003690", fontFamily: "georgia" }}>
            UPLOAD IMAGE
          </h1>
          <br />
          <div>
            <Button>
              <label className="custom-file-upload">
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/jpg, image/jpeg"
                  name="myImage"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
                <CloudUploadIcon
                  style={{
                    color: "#003690",
                    fontSize: "200px",
                    border: "1px solid #003690",
                    borderRadius: "50%",
                    padding: "50px",
                  }}
                >
                  {" "}
                  Attach
                </CloudUploadIcon>
              </label>
            </Button>
          </div>
        </div>
      </center>}
      {selectedImage ? <Box>
        <div
          className="container-fluid mb-3 pt-3 pb-4"
          style={{ backgroundColor: "#003690" }}
        >
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <h3
                className=" section-text section-hi"
                style={{
                  color: "white",
                  fontFamily: "georgia",
                  textAlign: "center",
                  fontSize: "35px",
                  margin: "25px",
                }}
              >
                Standard Frames <br />
                8" × 10"
              </h3>

              <p
                className=" section-text section-hi"
                style={{
                  color: "white",
                  fontFamily: "georgia",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                6” x 8” Print <br /> 7” x 9” Frame Interior <br /> 8” x 10”
                Frame Exterior
              </p>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames1} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames3} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames4} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 mt-4">
              <center>
                {selectedImage && (
                  <div className="framePre">
                    <img
                      className="fi1"
                      src={URL.createObjectURL(selectedImage)}
                      alt=""
                    />
                  </div>
                )}
              </center>
            </div>
          </div>
        </div>
        <center>
          <div className="container container-full-width section-white">
            <div className="container">
              <div className="row mt-3">
                {framing.slice(0, 3).map((frame, index) => {
                  return (
                    <div className="framesDis col-md-4 col-xs-12" key={index}>
                      {selectedImage && (
                        <div className={frame}>
                          <img
                            className="fi1"
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        </div>
                      )}
                      <p style={{ fontSize: "20px" }}>
                        BLACK - SD <br />
                        <button className="m-2" onClick={() => handleOpen()}>
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-crop"
                          ></i>
                        </button>
                        |
                        <button className="m-2">
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-cart-arrow-down"
                          ></i>
                        </button>
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {framing.slice(3, 6).map((frame, index) => {
                  return (
                    <div className="framesDis col-md-4 col-xs-12" key={index}>
                      {selectedImage && (
                        <div className={frame}>
                          <img
                            className="fi1"
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        </div>
                      )}
                      <p style={{ fontSize: "20px" }}>
                        BLACK - SD <br />
                        <button className="m-2" onClick={() => handleOpen()}>
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-crop"
                          ></i>
                        </button>
                        |
                        <button className="m-2">
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-cart-arrow-down"
                          ></i>
                        </button>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </center>

        <div
          className="container-fluid mb-3 pt-3 pb-4"
          style={{ backgroundColor: "#003690" }}
        >
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <h3
                className=" section-text section-hi"
                style={{
                  color: "white",
                  fontFamily: "georgia",
                  textAlign: "center",
                  fontSize: "35px",
                  margin: "25px",
                }}
              >
                Executive Frames <br />
                12" × 14"
              </h3>

              <p
                className=" section-text section-hi"
                style={{
                  color: "white",
                  fontFamily: "georgia",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                10” x 12” Print <br /> 11” x 13” Frame Interior <br /> 12” x 14”
                Frame Exterior
              </p>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames5} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames3} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 py-4">
              <center>
                <img className="frames px-1" src={frames4} alt="" />
              </center>
            </div>

            <div className="col-md-2 col-xs-12 mt-4">
              <center>
                {selectedImage && (
                  <div className="framePreEx">
                    <img
                      className="fi1"
                      src={URL.createObjectURL(selectedImage)}
                      alt=""
                    />
                  </div>
                )}
              </center>
            </div>
          </div>
        </div>
        <center>
          <div className="container container-full-width section-white">
            <div className="container">
              <div className="row mt-3">
                {framing.slice(0, 3).map((frame, index) => {
                  return (
                    <div className="framesDis col-md-4 col-xs-12" key={index}>
                      {selectedImage && (
                        <div className={`${frame}${index + 1}${index + 1}`}>
                          <img
                            className="fi1"
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        </div>
                      )}
                      <p style={{ fontSize: "20px" }}>
                        BLACK - SD <br />
                        <button className="m-2" onClick={() => handleOpen()}>
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-crop"
                          ></i>
                        </button>
                        |
                        <button className="m-2">
                          <i
                            style={{ fontSize: "25px", color: "#003690" }}
                            className="fa-solid fa-cart-arrow-down"
                          ></i>
                        </button>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </center>
      </Box>: null}
    </>
  );
};
export default Frame;
