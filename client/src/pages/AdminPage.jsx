import React from "react";
import { Box } from "@mui/material";
import AdminGrid from "../components/shared/AdminGrid";
import Auth from "../Auth";
import { useSelector } from "react-redux";
const AdminPage = () => {
  const initialState = useSelector((state) => state.initialState);
  return (
    <>
      <Auth />
      {initialState.authDisplay ? null : (
        <Box>
          <Box>
            <AdminGrid />
          </Box>
        </Box>
      )}
    </>
  );
};
export default AdminPage;