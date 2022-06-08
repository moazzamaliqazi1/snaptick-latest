import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { createClient } from "@supabase/supabase-js";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { addUser, backdropLoaderState } from "../../redux/action";
import user from "../../api/user";
import { FileIcon, defaultStyles } from "react-file-icon";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ASON
);
const PatientDocumentsUpload = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const files = acceptedFiles.map((file) => (
    <Box sx={{ margin: 1 }} key={file.path}>
      <Box sx={{ width: 40, margin: "auto" }}>
        <FileIcon
          extension="CN Test"
          style={{ width: 20 }}
          {...defaultStyles.docx}
        />
      </Box>
      <Typography variant="p" component="span">
        {file.name}
      </Typography>
    </Box>
  ));
  const saveDocuments = async () => {
    try {
      if (acceptedFiles.length > 0) {
        let isUpload = true
        let keys = []
        dispatch(backdropLoaderState(true))
        for (const image of acceptedFiles) {
          const { data, error } = await supabase.storage
            .from("medica-documents")
            .upload(`public/reports-${profile._id}-${Date.now()}`, image);
          if(error){
            isUpload = false
          }
          else{
            keys.push({
              key: data.Key,
              ext: image.name.split('.').pop()
            })
          }
        }
        if(isUpload){
          const uploadDocumentsKeys = await user.uploadDocumentKeys(keys, token)
          dispatch(backdropLoaderState(false))
          if(uploadDocumentsKeys.status === 200 && uploadDocumentsKeys.data.is_success){
            toast.info(uploadDocumentsKeys.data.message);
            dispatch(addUser(uploadDocumentsKeys.data.data))
          }
          else{
            toast.error(uploadDocumentsKeys.data.message);
          }
        }
        else{
          toast.error("There is error occurred, Please upload again");
          dispatch(backdropLoaderState(false))
        }
      } else {
        toast.error("Please upload at least one documents");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error on uploading your documents");
      dispatch(backdropLoaderState(false))
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
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} name="documents" />
            <p>Drag 'n' drop some your test reports</p>
          </div>
          <aside>
            <h4>Files</h4>
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>{files}</Box>
          </aside>
        </section>
        <Box>
          <Button
            variant="contained"
            style={{ color: "white" }}
            onClick={saveDocuments}
            fullWidth
          >
            Upload
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default PatientDocumentsUpload;
