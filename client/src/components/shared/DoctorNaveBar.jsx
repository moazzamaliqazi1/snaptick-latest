import React, { useState } from "react";
import { Box, Paper, Button, Drawer, Grid, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

import LeftDrawerDoctorList from "./LeftDrawerDoctorList";

const DoctorNaveBar = () => {
  const [drawerState, drawerSetState] = useState({ left: false });
  const profile = useSelector((state) => state.user);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    drawerSetState({ ...drawerState, [anchor]: open });
  };
  return (
    <>
      <Box>
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={1}>
              <Button onClick={toggleDrawer("left", true)}>
                <Avatar alt={profile.name ? profile.name: "MEDICA"} src={profile.profile_image ? profile.profile_image: ""} />
              </Button>
            </Grid>
            <Grid item xs={11}>
              <Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box>
        <Drawer
          anchor={"left"}
          open={drawerState["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <LeftDrawerDoctorList />
        </Drawer>
      </Box>
    </>
  );
};
export default DoctorNaveBar;
