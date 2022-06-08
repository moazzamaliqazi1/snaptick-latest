import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DoctorMeetingSelection from "../shared/DoctorMeetingSelection";
import PaymentCard from "react-payment-card-component";
import Files from "react-files";
import { FileIcon, defaultStyles } from "react-file-icon";

const steps = ["Select Method", "Select Card", "Upload Docments"];
const BookAppointmentStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (event) => {
    if (event.target.innerText === "NEXT") {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const DisplayComponent = () => {
    const [files, setFiles] = useState([]);
    const onFilesChange = (files) => {
      setFiles(files);
    };
    const onFilesError = (error) => {
      console.log("error code " + error.code + ": " + error.message);
    };
    if (activeStep === 0) {
      return (
        <>
          <Box sx={{ mt: 5, mb: 1 }}>
            <Grid item container spacing={2}>
              <Grid item xs={12} md={4}>
                <DoctorMeetingSelection
                  title="Ziya hospital (Ferozpur Road Lahore)"
                  available="Available (Mon - Fri : 12 PM-2 PM)"
                  price="1000/-"
                  background_color={{ backgroundColor: "#00aff0" }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DoctorMeetingSelection
                  title="Chat Consultation"
                  available="Chat Consultation Available (Mon - Fri : 12 PM-2 PM)"
                  price="700/-"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DoctorMeetingSelection
                  title="Video Consultation"
                  available="Online Video Consultation (Mon - Fri : 12 PM-2 PM)"
                  price="1500/-"
                />
              </Grid>
            </Grid>
          </Box>
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <Box sx={{ mt: 5, mb: 1 }}>
            <Grid item container spacing={2}>
              <Grid item xs={12} md={4} className="payment-card-view">
                <PaymentCard
                  bank="itau"
                  model="personnalite"
                  type="black"
                  brand="mastercard"
                  number="4111111111111111"
                  cvv="202"
                  holderName="Owen Lars"
                  expiration="12/20"
                  flipped={false}
                  style={{ minWidth: 270 }}
                />
              </Grid>
              <Grid item xs={12} md={4} className="payment-card-view">
                <PaymentCard
                  bank="itau"
                  model="normal"
                  type="gold"
                  brand="visa"
                  number="4111111111111111"
                  cvv="202"
                  holderName="Owen Lars"
                  expiration="12/20"
                  flipped={false}
                  style={{ minWidth: 270 }}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <Box sx={{ mt: 5, mb: 1 }}>
            <Files
              className="files-dropzone"
              onChange={onFilesChange}
              onError={onFilesError}
              accepts={["image/png", ".pdf", "audio/*", ".txt", ".docx"]}
              multiple
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Typography variant="p" component="p" color="primary">
                Drop files here or click to upload
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  {files.map((item, index) => {
                    return (
                      <Box sx={{ marginRight: 1, marginBottom: 1, width: 40 }} key={index}>
                        <FileIcon
                          extension={item.id}
                          style={{ width: 20 }}
                          {...defaultStyles[item.extension]}
                        />
                      </Box>
                    );
                  })}
                </Grid>
              </Box>
            </Files>
          </Box>
        </>
      );
    }
  };
  return (
    <>
      <Container maxWidth="xl">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box>
          <DisplayComponent />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BookAppointmentStepper;
