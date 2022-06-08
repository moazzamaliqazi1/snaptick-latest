import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Container,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux"
import { FileIcon, defaultStyles } from "react-file-icon";
import { patientRecordDoctorDialogBox } from "../../redux/action"

const DownDrawerListPatientDetails = () => {
  const dispatch = useDispatch();
  const [drawerState, DrawerSetState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    DrawerSetState({ ...drawerState, [anchor]: open });
  };

  return (
    <>
      <Box
        sx={{ width: "auto", maxHeight: 300 }}
        role="presentation"
        onClick={toggleDrawer("bottom", false)}
        onKeyDown={toggleDrawer("bottom", false)}
      >
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Box>
            <Typography variant="h6" component="p">
              Medicine
            </Typography>
          </Box>
          <Box>
            {["calpop", "panadol"].map((item, index) => {
              return (
                <Chip
                  key={index}
                  label={item}
                  sx={{ marginRight: 1, marginDown: 1 }}
                />
              );
            })}
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" component="p">
              Notes
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" component="p">
              Reviews
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" component="p">
              Documents of Patient{" "}
              <Tooltip title="Get Report Summary of Each Report By Click">
                <IconButton>!</IconButton>
              </Tooltip>
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box sx={{ marginRight: 1, marginBottom: 1 }}>
                <Box sx={{ width: 40, margin: "auto" }} onClick={()=> dispatch(patientRecordDoctorDialogBox(true))}>
                  <FileIcon
                    extension="CN Test"
                    style={{ width: 20 }}
                    {...defaultStyles.docx}
                  />
                </Box>
                <Typography variant="p" component="span">
                  File Name 1
                </Typography>
              </Box>
              <Box sx={{ marginRight: 1, marginBottom: 1 }}>
                <Box sx={{ width: 40, margin: "auto" }} onClick={()=> dispatch(patientRecordDoctorDialogBox(true))}>
                  <FileIcon
                    extension="CN Test"
                    style={{ width: 20 }}
                    {...defaultStyles.pdf}
                  />
                </Box>
                <Typography variant="p" component="span">
                  File Name 2
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default DownDrawerListPatientDetails;
