import React, { useRef } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { addUser } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import user from "../../api/user";

const DoctorBasicInfoChange = () => {
  const editorRef = useRef(null);
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const profileBio = () => {
    if (editorRef.current) {
      dispatch(
        addUser({
          ...profile,
          bio: editorRef.current.getContent(),
        })
      );
    }
  };
  const saveBasicProfileInfo = async () => {
    try {
      const saveBasicInfo = await user.saveProfileInfo(
        {
          type: "basic-info",
          basic_data: {
            ...profile,
            name: profile.name ? profile.name : profile.user_name,
          },
        },
        token
      );
      if (saveBasicInfo.status === 200 && saveBasicInfo.data.is_success) {
        toast.info(saveBasicInfo.data.message);
      } else {
        toast.error(saveBasicInfo.data.message);
      }
      dispatch(addUser(saveBasicInfo.data.data));
    } catch (error) {
      console.log(error);
      toast.error("Error during save a basic information. Please try again");
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="p" variant="p" color="primary">
              We always keep your number private
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              onChange={(event) => {
                dispatch(
                  addUser({
                    ...profile,
                    name: event.target.value,
                  })
                );
              }}
              value={profile.name ? profile.name : profile.user_name}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="react-phone-input">
              <PhoneInput
                country={"pk"}
                placeholder="Phone Number"
                enableSearch={true}
                countryCodeEditable={false}
                name="phone_number"
                onChange={(value, country) => {
                  dispatch(
                    addUser({
                      ...profile,
                      phone_number: value,
                      phone_info: country,
                    })
                  );
                }}
                value={profile.phone_number ? profile.phone_number : ""}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Editor
              apiKey="e78ztdg4sgsyfo67r07u3c60ipc3oohjjq5x48lbwso41wng"
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={profileBio}
              initialValue={
                profile.bio
                  ? profile.bio
                  : "<p>Please provide a bio about you</p>"
              }
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist autolink lists link charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ color: "white" }}
              onClick={saveBasicProfileInfo}
              fullWidth
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DoctorBasicInfoChange;
