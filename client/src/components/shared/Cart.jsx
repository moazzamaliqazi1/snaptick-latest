import React from "react";
import { RadioButton, RadioGroup } from "react-radio-buttons";
import PhoneInput from "react-phone-input-2";
import { useSelector } from "react-redux";
import mozam from "../../images/mozam.jpg";
import Select from 'react-select'
import { Button } from "@mui/material";

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }

]

const Cart = () => {
    const profile = useSelector((state) => state.user);

    return (
        <>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-4 col-xs-12 m-0 p-0">
                        <form className="contact100-form validate-form m-0 p-0" style={{ width: "100%", }}>
                            <h3><b>Checkout:</b></h3>
                            <label className="label-input100" for="Phone">
                                Enter Phone Number *
                            </label>
                            <div
                                className="wrap-input100  validate-input required"
                                required
                                data-validate="Type Phone"
                            >
                                <PhoneInput
                                    country={"pk"}
                                    placeholder="Phone Number"
                                    enableSearch={true}
                                    countryCodeEditable={false}
                                    name="phone_number"
                                    className="input100"
                                    onClick="border-none"
                                    inputClass="input100"
                                /*onChange={(value, country) => {
                                    dispatch(
                                        addUser({
                                            ...profile,
                                            phone_number: value,
                                            phone_info: country,
                                        })
                                    );
                                }}*/
                                // value={profile.phone_number ? profile.phone_number : ""}
                                />

                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" for="address">
                                Address *
                            </label>
                            <div
                                className="wrap-input100 validate-input"
                                data-validate="Address is required"
                            >
                                <textarea
                                    className="input100"
                                    name="adress"
                                    placeholder="Your Address"

                                    required
                                ></textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="p-3">
                                <input type="radio" value="Send as Gift" name="gift" /> Send as Gift, Online Payment only.
                            </div>

                            {profile.payment_cards ? (
                                <RadioGroup style={{ width: "100%" }} /*onChange={(value) => {
                                    dispatch(setBookAppointmentForm({
                                        ...appointmentForm,
                                        payment_cards_id: value
                                    }))
                                }}*/>
                                    {
                                        profile.payment_cards.map((payment_card) => {
                                            return (
                                                <RadioButton key={payment_card._id} value={payment_card._id}>{payment_card.number.slice(0, 4)} **** **** {payment_card.number.slice(payment_card.number.length - 4, payment_card.number.length)}</RadioButton>
                                            );
                                        })
                                    }
                                </RadioGroup>
                            ) : null}

                        </form>
                    </div>

                    <div className="col-md-3 col-xs-12">
                        <h3>Items</h3>
                        <div className="framePre">
                            <img
                                className="fi1"
                                src={mozam}
                                alt=""
                            />
                        </div>
                    </div>


                    <div className="col-md-2 col-xs-12" >
                        <h3>Quantity</h3>
                        <Select options={options} className='m-2' />

                    </div>

                    <div className="col-md-2 col-xs-12" >
                        <h3>Price</h3>
                        <p style={{ fontSize: '20px', paddingTop: '10px' }}>
                            89$
                        </p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <center>
                            <Button style={{ backgroundColor: '#003690', color: 'white', fontSize: '20px' }}>Place Order</Button>
                        </center>
                    </div>
                </div>
            </div>


        </>

    );
};
export default Cart;
