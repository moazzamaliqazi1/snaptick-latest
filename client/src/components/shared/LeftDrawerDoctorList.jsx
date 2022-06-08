import React, { useState } from "react";
import { Box, List, ListItem, Divider, ListItemIcon } from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import LogoImage from "../../images/logo.png";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import { useNavigate } from "react-router-dom";
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { addUser, backdropLoaderState } from "../../redux/action";
import Cookies from "universal-cookie";
import user from "../../api/user";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const LeftDrawerDoctorList = () => {
  const cookies = new Cookies();
  const profile = useSelector((state) => state.user);
  const token = cookies.get("token");
  const dispatch = useDispatch();
  const [drawerState, DrawerSetState] = useState({ left: false });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    DrawerSetState({ ...drawerState, [anchor]: open });
  };
  const logout = async () => {
    try {
      dispatch(backdropLoaderState(true));
      const response = await user.logout(token);
      dispatch(backdropLoaderState(false));
      if (response.status === 200 && response.data.is_success) {
        cookies.remove("token");
        dispatch(addUser({}));
        navigate("/login");
      }
    } catch (error) {
      dispatch(backdropLoaderState(false));
      console.log(error);
    }
  };
  return (
    <>
      <Box
        sx={{ width: 250, paddingLeft: 3 }}
        role="presentation"
        onClick={toggleDrawer("left", false)}
        onKeyDown={toggleDrawer("left", false)}
      >
        <List>
          <Box sx={{ mb: 2 }}>
            <ListItem button>
              <ListItemIcon>
                <img src={LogoImage} alt="MEDICA" className="w-100 max-wp60" />
              </ListItemIcon>
            </ListItem>
          </Box>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/appointment")}
          >
            <ListItemIcon>
              <BookOnlineOutlinedIcon />
            </ListItemIcon>
            Appointment
          </ListItem>
          <ListItem
            button
            onClick={() => navigate("/dashboard/patient/test-reports")}
          >
            <ListItemIcon>
              <FolderSharedOutlinedIcon />
            </ListItemIcon>
            Test Reports
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigate("/dashboard/patient/profile/medical-treatment")
            }
          >
            <ListItemIcon>
              <CommentOutlinedIcon />
            </ListItemIcon>
            Your Treatment
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PersonSearchOutlinedIcon />
            </ListItemIcon>
            Search Doctor
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/accounts")}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            Accounts $ {profile.balance}
          </ListItem>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/profile")}
          >
            <ListItemIcon>
              <FaceOutlinedIcon />
            </ListItemIcon>
            Profile
          </ListItem>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/certificates")}
          >
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            Certificates
          </ListItem>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/set/timings")}
          >
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            Set Available Time
          </ListItem>
          <ListItem
            button
            onClick={() => navigate("/dashboard/doctor/profile/setting")}
          >
            <ListItemIcon>
              <SettingsApplicationsOutlinedIcon />
            </ListItemIcon>
            Setting
          </ListItem>
          <ListItem button onClick={() => logout()}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            Logout
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default LeftDrawerDoctorList;
