import React from "react";
import { Box, Paper, Container, Typography, Button } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  {
    id: 1,
    appointment_date: new Date(),
    recomended_medicine: "Panadol, Medicne",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    documents: "View",
    reports_summary: "View Summary",
    doctor_name: 'Talha Khan'
  },
  {
    id: 2,
    appointment_date: new Date(),
    recomended_medicine: "Panadol, Medicne",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    documents: "View",
    reports_summary: "View Summary",
    doctor_name: 'Talha Khan'
  },
  {
    id: 3,
    appointment_date: new Date(),
    recomended_medicine: "Panadol, Medicne",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    documents: "View",
    reports_summary: "View Summary",
    doctor_name: 'Talha Khan'
  },
  {
    id: 4,
    appointment_date: new Date(),
    recomended_medicine: "Panadol, Medicne",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    documents: "View",
    reports_summary: "View Summary",
    doctor_name: 'Talha Khan'
  },
  {
    id: 5,
    appointment_date: new Date(),
    recomended_medicine: "Panadol, Medicne",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec.",
    documents: "View",
    reports_summary: "View Summary",
    doctor_name: 'Talha Khan'
  },
];
const columns: GridColDef[] = [
  {
    field: "appointment_date",
    headerName: "Appointment Date",
    width: 200,
    align: "center",
    type: "dateTime",
    headerAlign: "center",
  },
  {
    field: "recomended_medicine",
    headerName: "Recomended Medicine",
    width: 180,
  },
  { field: "notes", headerName: "Notes", width: 300, headerAlign: "center" },
  {
    field: "reviews",
    headerName: "Reviews",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "documents",
    headerName: "Documents",
    renderCell: () => {
      return <Button variant="contained">View</Button>;
    },
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "reports_summary",
    headerName: "Reports Summary",
    renderCell: () => {
      return <Button variant="contained">Generate Summary</Button>;
    },
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "doctor_name",
    headerName: "Doctor Name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
];
const PatientRecords = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={3}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: "center", padding: "20px" }}
            >
              Your Previous Record
            </Typography>
          </Box>
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
              columnBuffer={8}
              density="comfortable"
              editMode="row"
              hideFooterSelectedRowCount={true}
              className="datagrid-table-toolbar"
              disableSelectionOnClick={true}
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default PatientRecords;
