import React from "react";
import { TextField, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import user from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { addUser } from "../../redux/action";

const DoctorFeesInput = () => {
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const changeFee = async (event) => {
    try {
      if (Number(event.target.value) >= 0 && Number.isInteger(Number(event.target.value))) {
        event.target.value = Number(event.target.value);
        dispatch(
          addUser({
            ...profile,
            fee: event.target.value,
          })
        );
        const response = await user.saveProfileInfo(
          {
            type: "finance-setting",
            fee: event.target.value,
          },
          token
        );
        if (response.status === 200 && response.data.is_success) {
          // toast.info(response.data.message); show message that fee is success fully changed
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during change fee. Please try again");
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
        <TextField
          type="number"
          label="Set Your Fee"
          variant="outlined"
          value={profile.fee ? profile.fee : 0}
          onChange={changeFee}
        />
      </Box>
    </>
  );
};
export default DoctorFeesInput;
