import React, { useState } from 'react';
import {
    Box,
    Table,
    TextField,
    Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import userAPI from "../../api/user";
import { isMobilePhone } from "validator"
import { ToastContainer, toast } from "react-toastify";
import { addUser, backdropLoaderState } from "../../redux/action"
const Profile = () => {
    const [ settings, setSetting ] = useState({
        phone_number: "",
        address: ""
    })
    const cookies = new Cookies();
    const dispatch = useDispatch()
    const token = cookies.get("token");
    let profile = useSelector((state) => state.user);
    const updateStates = async(event)=>{
        try {
            const { name, value } = event.target;
            setSetting((prev)=>{
                return ({
                    ...prev,
                    [name]: value
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    const updateProfile = async()=>{
        try {
            const { phone_number, address } = settings
            if(phone_number && address){
                if(phone_number[0] === "+"){
                    if (isMobilePhone(phone_number)){
                        dispatch(backdropLoaderState(true))
                        const response = await userAPI.updateProfile(token, phone_number, address)
                        if(response.status === 200 && response.data.is_success){
                            const responseTwo = await userAPI.getProfile(token)
                            dispatch(backdropLoaderState(false))
                            dispatch(addUser(responseTwo.data.data))
                            toast.success(response.data.message)
                        }
                        else {
                            dispatch(backdropLoaderState(false))
                            toast.error(response.data.message)
                        }
                    }
                    else {
                        toast.error("Please enter valid phone number")
                    }
                }
                else {
                    toast.error("Please enter valid phone number")
                }
            }
            else {
                toast.error("Please filled all fields")
            }
        } catch (error) {
            console.log(error)
        }
    }
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
            <div className='col-md-12'>
                <center>
                    <h3 className='text-uppercase fw-bold' style={{ color: '#003690' }}>User Profile</h3>
                </center>
            </div>

            <div className='row pt-4'>
                <div className='col-md-4'>
                    <center>
                        <br></br>
                        <h4 className='fw-bold'>Name:</h4>
                        <h5 style={{ color: '#003690' }}>{profile.user_name ? profile.user_name: "Loading"}</h5>

                        <h4 className='fw-bold'>Email:</h4>
                        <h5 style={{ color: '#003690' }}>{profile.email ? profile.email: "Loading"}</h5>

                        <h4 className='fw-bold'>Phone Number:</h4>
                        <h5 style={{ color: '#003690' }}>{profile.phone_number ? profile.phone_number: "NA"}</h5>

                        <h4 className='fw-bold'>Address:</h4>
                        <h5 style={{ color: '#003690' }}>{profile.address ? profile.address: "NA"}</h5>

                    </center>
                </div>

                <div className='col-md-4' style={{ borderLeft: 'solid' }}>
                    <center>
                        <br></br>
                        <h5 className='text-uppercase fw-bold'>You can only update Phone Number & Address</h5>

                        <Box sx={{ mx: 3, my: 2 }}>
                            <TextField
                                label="New Phone Number"
                                variant="outlined"
                                type="text"
                                name="phone_number"
                                value={settings.phone_number}
                                onChange={updateStates}
                            />
                        </Box>

                        <Box sx={{ mx: 3, my: 2 }}>
                            <TextField
                                label="New Address"
                                variant="outlined"
                                type="text"
                                name="address"
                                value={settings.address}
                                onChange={updateStates}
                            />
                        </Box>
                        <Box sx={{ mx: 3, my: 2 }}>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ color: "white", backgroundColor: '#003690' }}
                                onClick={updateProfile}
                            >
                                Update
                            </Button>
                        </Box>

                    </center>
                </div>

                <div className='col-md-4' style={{ borderLeft: 'solid', paddingLeft: '80px' }}>
                    <br></br>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ color: '#003690' }}>Order ID</th>
                                <th style={{ color: '#003690' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ustd7653</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    )
}
export default Profile