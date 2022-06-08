import React, { useState } from "react";
import { Container, Box, Button, Paper, Grid, TextField } from "@mui/material";
import CreditCardInput from "react-credit-card-input";
import Cards from "react-credit-cards";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { addUser } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import user from "../../api/user";
const AddPaymentCard = () => {
  const [cardValid, setCardValid] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    expiry2: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCard((prev) => {
      return {
        ...prev,
        [name]: value,
        expiry2: name === "expiry" ? value.replace(/\s/g, "") : prev.expiry2,
      };
    });
  };
  const addPaymentCard = async () => {
    try {
      if (cardValid) {
        const saveBasicInfo = await user.addPaymentCard(card, token);
        if (saveBasicInfo.status === 200 && saveBasicInfo.data.is_success) {
          toast.info(saveBasicInfo.data.message);
          dispatch(addUser(saveBasicInfo.data.data));
        } else {
          toast.error(saveBasicInfo.data.message);
        }
      } else {
        toast.error("Invalid card information");
      }
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
      <Container maxWidth="xl">
        <Box>
          <Paper elevation={3} sx={{ p: 1, mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} className="payment-card-align">
                <Cards
                  cvc={card.cvc}
                  expiry={card.expiry2}
                  focused={card.focus}
                  name={card.name}
                  number={card.number}
                  callback={(type, isValid) => {
                    console.log(isValid);
                    setCardValid(isValid);
                  }}
                />
              </Grid>
              <Grid item xs={12} className="payment-card-align">
                <CreditCardInput
                  cardNumberInputProps={{
                    name: "number",
                    value: card.number,
                    onChange: handleInputChange,
                  }}
                  cardExpiryInputProps={{
                    name: "expiry",
                    value: card.expiry,
                    onChange: handleInputChange,
                  }}
                  cardCVCInputProps={{
                    name: "cvc",
                    value: card.cvc,
                    onChange: handleInputChange,
                  }}
                  fieldClassName="input"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Card Holder Name"
                  variant="standard"
                  name="name"
                  value={card.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ color: "white" }}
                  onClick={addPaymentCard}
                >
                  Add Card
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
export default AddPaymentCard;
