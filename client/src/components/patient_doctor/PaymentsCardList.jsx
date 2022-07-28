import React from "react";
import { Box, Grid, Paper, Container } from "@mui/material";
import { useSelector } from "react-redux";
import Cards from "react-credit-cards";
import NoContent from "../shared/NoContent";
const PaymentsCardList = () => {
  const profile = useSelector((state) => state.user);
  return (
    <>
      <div className='col-md-12'>
        <center>
          <h3 className='text-uppercase fw-bold' style={{ color: '#002856' }}>your payment cards:</h3>
        </center>
      </div>

        <Container maxWidth="xl" className="pt-5">
          <Grid
            container
            direction="row"
            justifyContent={profile.payment_cards ? 'flex-start' : 'center'}
            alignItems="center"
          >
            {profile.payment_cards ? (
              profile.payment_cards.map((card) => {
                return (
                  <Box key={card._id} sx={{ mr: 1, mb: 1 }}>
                    <Cards
                      cvc={card.cvc}
                      expiry={card.expiry.replace("/", "")}
                      focused={card.focus}
                      name={card.name}
                      number={card.number}
                    />
                  </Box>
                );
              })
            ) : (
              <Box sx={{ height: 500, mt: 5 }}>
                <NoContent
                  url={null}
                  button_value={null}
                  text="No Payment Card Available"
                />
              </Box>
            )}
          </Grid>
        </Container>
    </>
  );
};

export default PaymentsCardList;
