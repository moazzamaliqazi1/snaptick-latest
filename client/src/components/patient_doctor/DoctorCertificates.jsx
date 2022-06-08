import React, { useRef } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { addUser, backdropLoaderState } from "../../redux/action";
import user from "../../api/user";
import Cookies from "universal-cookie";
import { FileIcon, defaultStyles } from "react-file-icon";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ASON
);

const DoctorCertificates = () => {
  const navigate = useNavigate()
  const refImage = useRef(null);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const profile = useSelector((state) => state.user);
  const uploadCertificates = async (event) => {
    try {
      if (event.target.files.length === 1) {
        dispatch(backdropLoaderState(true));
        const { data, error } = await supabase.storage
          .from("medica-documents")
          .upload(`public/certificates-${Date.now()}`, event.target.files[0]);
        if (error) {
          toast.error("Error uploading file");
          dispatch(backdropLoaderState(false));
        } else {
          const uploadCertificatesKeys = await user.uploadCertificatesKeys(
            [
              {
                key: data.Key,
                ext: event.target.files[0].name.split(".").pop(),
              },
            ],
            token
          );
          dispatch(backdropLoaderState(false));
          if (
            uploadCertificatesKeys.status === 200 &&
            uploadCertificatesKeys.data.is_success
          ) {
            toast.info(uploadCertificatesKeys.data.message);
            dispatch(addUser(uploadCertificatesKeys.data.data));
          } else {
            toast.error(uploadCertificatesKeys.data.message);
          }
        }
      } else {
        toast.error("Please select only one file");
      }
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
      toast.error("Error on uploading your documents");
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
      <input
        type="file"
        ref={refImage}
        onChange={uploadCertificates}
        style={{ display: "none" }}
      />
      <Container maxWidth="xl">
        <Box>
          <Paper elevation={3} sx={{ p: 1, mb: 3 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="p" component="p" color="primary">
                Upload Your Certificates
              </Typography>
              <IconButton
                color="primary"
                aria-label="add certificates"
                onClick={() => refImage.current.click()}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Paper>
          {profile.certificates && profile.certificates.length > 0
            ? profile.certificates.map((file, index) => {
                return (
                  <Paper elevation={3} sx={{ p: 1, mb: 2 }} key={index}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      sx={{ mb: 2, cursor: "pointer" }}
                      onClick={() => {navigate(`/file-view/${file.key.split("/").pop()}/${file.ext}`)}}
                    >
                      <Box sx={{ width: 40, mr: 1 }}>
                        <FileIcon
                          extension={file.ext}
                          style={{ width: 20 }}
                          {...defaultStyles[file.ext]}
                        />
                      </Box>
                      <Typography variant="p" component="span" color="primary">
                        {file.key.split("/").pop()}
                      </Typography>
                    </Grid>
                  </Paper>
                );
              })
            : null}
        </Box>
      </Container>
    </>
  );
};
export default DoctorCertificates;
