import React from 'react';
import {
    Box,
    Table,
    TextField,
    Button,
} from "@mui/material";

const Profile = () => {
    return (
        <>
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
                        <h5 style={{ color: '#003690' }}>username</h5>

                        <h4 className='fw-bold'>Email:</h4>
                        <h5 style={{ color: '#003690' }}>email@email.com</h5>

                        <h4 className='fw-bold'>Phone Number:</h4>
                        <h5 style={{ color: '#003690' }}>number</h5>

                        <h4 className='fw-bold'>Address:</h4>
                        <h5 style={{ color: '#003690' }}>address</h5>

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
                                name="phone"

                            />
                        </Box>

                        <Box sx={{ mx: 3, my: 2 }}>
                            <TextField
                                label="New Address"
                                variant="outlined"
                                type="text"
                                name="address"
                            />
                        </Box>
                        <Box sx={{ mx: 3, my: 2 }}>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ color: "white", backgroundColor: '#003690' }}
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