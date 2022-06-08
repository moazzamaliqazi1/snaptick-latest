import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
const SmallMedicationCard = () => {
  return (
    <>
      <Box>
        <Card>
          <Box>
            <CardContent>
              <Typography component="h6" variant="h6">
                Ziya Hospital (Ferozpur Road Lahore)
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Appointment Date (Fri : 12Pm)
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h6">
                Dr Ali Rehman
              </Typography>
              {["Katorolac (150mg)", "Katorolac (100mg)"].map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    color="text.secondary"
                    component="h6"
                  >
                    Medicine : {item}
                  </Typography>
                );
              })}
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default SmallMedicationCard;
