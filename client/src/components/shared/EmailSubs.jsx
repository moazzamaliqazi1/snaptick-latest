import React from 'react';
import icon from '../../images/plane.png'
import {
    Box,
    TextField,
    Button,
} from "@mui/material";

const About = () => {
    return (
        <>
            <div style={{ display: 'inline' }}>
                <center>
                    <h4 style={{ fontFamily: 'georgia' }}>Get the inside scoop on product launches and
                        exclusive offers:</h4>
                        
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-4">
                            </div>

                            <div className="col-md-4">
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
                                    <span className="focus-input100"></span>
                                </div>
                                <Button
                                    className='py-2 ml-2'
                                    size="small"
                                >
                                    <img src={icon} alt="" width={'40px'}></img>
                                </Button>
                            </div>

                            <div className="col-md-4">
                            </div>

                        </div>
                    </div>
                </center>
            </div>

        </>
    )
}
export default About


