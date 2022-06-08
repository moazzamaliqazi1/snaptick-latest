import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Grid, Chip, Typography } from "@mui/material";
import Select from "react-select";
import adminAPI from "../../api/admin";
import userAPI from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser, backdropLoaderState } from "../../redux/action";
import Cookies from "universal-cookie";
import randomColor from "randomcolor";

const DoctorLanguageSkillsSet = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user);
  const [languages, setLanguages] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const getAdminPublicSetting = async () => {
    try {
      const response = await adminAPI.getPublicData();
      if (response.status === 200 && response.data.is_success) {
          for(const lang of response.data.data.languages){
            setLanguages((prev)=>{
                return [
                    ...prev,
                    {
                        label: lang.name,
                        value: lang.name
                    }
                ]
            });
          }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during get admin public setting. Please try again");
    }
  };
  const saveLanguages = async(event)=>{
    try {
        dispatch(backdropLoaderState(true))
        const response = await userAPI.saveLanguages(event, token)
        dispatch(backdropLoaderState(false))
        if(response.status === 200 && response.data.is_success){
            dispatch(addUser({
                ...profile,
                languages: response.data.data.languages
            }));
        }
        else {
            toast.error(response.data.message);
        }
    } catch (error) {
        dispatch(backdropLoaderState(false))
        console.log(error);
        toast.error("Error during save languages. Please try again");
    }
  }
  useEffect(() => {
    getAdminPublicSetting();
  }, []);
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
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography component="h6" variant="h6" color="primary">
                  Select your languages
              </Typography>
          </Grid>
        <Grid item xs={12}>
          <Select
            defaultValue={languages[0] ? languages[0] : []}
            isMulti
            name="languages"
            options={languages}
            onChange={saveLanguages}
          />
        </Grid>
        <Grid item xs={12}>
            {
                profile.languages ? profile.languages.map((item, index)=>{
                    const color = randomColor();
                    return <Chip key={index} label={item.value} style={{ color, marginRight: 5, marginBottom: 5 }}/>
                }): null
            }
        </Grid>
      </Grid>
    </>
  );
};
export default DoctorLanguageSkillsSet;
