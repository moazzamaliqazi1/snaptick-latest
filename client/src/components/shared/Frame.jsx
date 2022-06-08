import React, {useState} from "react";
import { Box, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Frame = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <center>
                <div className="container-fluid col-md-12 py-2" style={{ borderStyle: 'solid', border: '5px' }} >

                    {selectedImage && (
                        <div className="frameimagepreview" >
                            <img alt="" className="fimg" src={URL.createObjectURL(selectedImage)} />
                            <br />
                        </div>
                    )}
                    <br />
                    <br />

                    <Button>

                        <label className="custom-file-upload">
                            <input
                                style={{ display: "none" }}
                                type="file"
                                accept="image/jpg, image/jpeg"
                                name="myImage"
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                }}
                            />
                            <CloudUploadIcon style={{
                                color: "#003690",
                                fontSize: "60px",
                                border: "1px solid #003690",
                                borderRadius: "50%",
                                padding: "10px"
                            }}> Attach</CloudUploadIcon>
                        </label>
                    </Button>

                </div>

            </center>

            <Box>
                <div className="py-3"><p style={{ color: 'white' }}>SnapTick</p></div>

                <div className="container-fluid mb-3 p-3" style={{ backgroundColor: '#003690' }}>
                    <h3 className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '35px', margin: '25px'
                        }} >
                        Standard Frames
                    </h3>
                    <p className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '30px', margin: '25px'
                        }} >
                        8" × 10"
                    </p>


                </div>
                <center>
                    <div className="container container-full-width section-white">
                        <div className="container">
                            <div className="row">
                                <p className=" section-text section-hi"
                                    style={{
                                        color: '#003690', fontFamily: 'georgia',
                                        textAlign: 'center', fontSize: '20px', margin: '10px'
                                    }} >
                                    6” x 8” Print &nbsp; - &nbsp; 7” x 9” Frame Interior &nbsp; - &nbsp; 8” x 10” Frame Exterior
                                </p>
                                <div className="col-md-3 col-xs-12 p-5">

                                    {selectedImage && (
                                        <div className="frame1" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>


                                <div className="col-md-3 col-xs-12 p-5">

                                    {selectedImage && (
                                        <div className="frame2" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame3" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame4" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>

                    </div>
                </center>
                <br />
                <br />
                <div className="container-fluid mb-3 mt-3 p-3" style={{ backgroundColor: '#003690' }}>
                    <h3 className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '35px', margin: '25px'
                        }} >
                        Potrait Frames
                    </h3>
                    <h3 className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '25px', margin: '25px'
                        }} >
                        10" × 12"
                    </h3>

                </div>
                <center>
                    <div className="container container-full-width section-white">
                        <div className="container">
                            <div className="row">

                                <p className=" section-text section-hi"
                                    style={{
                                        color: '#003690', fontFamily: 'georgia',
                                        textAlign: 'center', fontSize: '20px', margin: '10px'
                                    }} >
                                    8” x 10” Print &nbsp; - &nbsp; 9” x 11” Frame Interior &nbsp; - &nbsp; 10” x 12” Frame Exterior
                                </p>

                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame11" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame22" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame33" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame44" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>

                    </div>
                </center>
                <br />
                <br />


                <div className="container-fluid mb-3 mt-3 p-3" style={{ backgroundColor: '#003690' }}>
                    <h3 className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '35px', margin: '25px'
                        }} >
                        Executive Frames
                    </h3>
                    <h3 className=" section-text section-hi"
                        style={{
                            color: 'white', fontFamily: 'georgia',
                            textAlign: 'center', fontSize: '25px', margin: '25px'
                        }} >
                        12" × 14"
                    </h3>

                </div>
                <center>
                    <div className="container container-full-width section-white">
                        <div className="container">
                            <div className="row">

                                <p className=" section-text section-hi"
                                    style={{
                                        color: '#003690', fontFamily: 'georgia',
                                        textAlign: 'center', fontSize: '20px', margin: '10px'
                                    }} >
                                    10” x 12” Print &nbsp; - &nbsp; 11” x 13” Frame Interior &nbsp; - &nbsp; 12” x 14” Frame Exterior
                                </p>

                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame111" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame222" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame333" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                                <div className="col-md-3 col-xs-12 p-5">
                                    {selectedImage && (
                                        <div className="frame444" >
                                            <img className="fi1" src={URL.createObjectURL(selectedImage)} alt="" />
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>

                    </div>
                </center>

            </Box>

        </>
    );
};
export default Frame;
