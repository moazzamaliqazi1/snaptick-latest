import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setBookAppointmentForm } from "../../redux/action";
import { RadioButton, RadioGroup } from "react-radio-buttons";
const SelectPaymentMethod = () => {
  const appointmentForm = useSelector((state) => state.appointmentForm);
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="h6" color="primary" sx={{ mb: 1, backgroundColor: 'red', color: 'white', p: 1 }}>
          Doctor Fees: $ {appointmentForm.fee} will be deducted from your below select account after booked appointment
        </Typography>
        {profile.payment_cards ? (
            <RadioGroup onChange={(value)=>{
                dispatch(setBookAppointmentForm({
                    ...appointmentForm,
                    payment_cards_id: value
                }))
            }}>
            {
                profile.payment_cards.map((payment_card) => {
                    return (
                        <RadioButton key={payment_card._id} value={payment_card._id}>{payment_card.number.slice(0, 4)} **** **** {payment_card.number.slice(payment_card.number.length - 4, payment_card.number.length)}</RadioButton>
                    );
                })
            }
            </RadioGroup>
        ): null}
      </Box>
    </>
  );
};
export default SelectPaymentMethod;
