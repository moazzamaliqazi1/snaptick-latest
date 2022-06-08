import React from "react";
import { Box } from "@mui/material";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import PatientAppointmentNotes from "./PatientAppointmentNotes"
const medicineColumns = [
  {
    name: "medicine_name",
    header: "Name",
    defaultFlex: 1,
  },
  {
    name: "medicine_days",
    header: "Days",
    defaultFlex: 1,
  },
  {
    name: "description",
    header: "Description",
    defaultFlex: 1,
  },
];
const medicineRows = [
  {
    id: 1,
    medicine_name: "Parasol",
    medicine_days: 5,
    description: "3 times a day",
  },
  {
    id: 2,
    medicine_name: "Calpol",
    medicine_days: 2,
    description: "2 times a day",
  },
  {
    id: 3,
    medicine_name: "Anti-Bio",
    medicine_days: 1,
    description: "1 times a day",
  },
];
const gridStyle = { minHeight: 350 };
const PatientAppointmentsDetail = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <ReactDataGrid
          idProperty="id"
          columns={medicineColumns}
          dataSource={medicineRows}
          style={gridStyle}
          pagination
          defaultLimit={10}
        />
        <Box sx={{mt: 3}}>
        <PatientAppointmentNotes/>
        </Box>
      </Box>
    </>
  );
};
export default PatientAppointmentsDetail;
