import React, { useRef } from "react";
import { Box, Paper, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/action";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import user from "../../api/user";
import { Widget } from "@uploadcare/react-widget";
import backgroundImage from "../../images/login-background.jpg";
const PatientProfileImageUpload = () => {
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const widgetApi = useRef();
  const token = cookies.get("token");
  const imageChange = async (fileInfo) => {
    try {
      const response = await user.updateProfileImage(
        fileInfo.originalUrl,
        fileInfo,
        token
      );
      if (response.status === 200 && response.data.is_success) {
        dispatch(addUser(response.data.data));
        toast.info(response.data.message);
      } else {
        // show a message
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
      <Box>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Button
            variant="contained"
            style={{ color: "white" }}
            onClick={() => widgetApi.current.openDialog()}
            sx={{mb: 2}}
          >
            Choose Profile Picture
          </Button>
          <Widget
            publicKey="e1f874838ce0b241c59b"
            crop={true}
            previewStep={true}
            imageShrink="300*300"
            onChange={imageChange}
            ref={widgetApi}
          />
          <Box sx={{ width: {
            xs: '260px',
            sm: '300px'
          }, hight: {
            xs: '260px',
            sm: '300px'
          } }}>
            <img
              src={
                profile.profile_image ? profile.profile_image : backgroundImage
              }
              alt="profile"
              width="100%"
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default PatientProfileImageUpload;
