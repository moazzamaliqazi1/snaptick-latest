import React, { useState } from "react";
import { Container, Paper, Button, Box, Drawer, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";
import DownDrawerListPatientDetails from "../shared/DownDrawerListPatientDetails";
import { patientRecordDoctorDialogBox } from "../../redux/action"
import { useDispatch, useSelector } from "react-redux"
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom"
const PatientDoctorRecords = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const dialogBoxPatientReport = useSelector((state) => state.dialogBox)
  const [drawerState, drawerSetState] = useState({ bottom: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    drawerSetState({ ...drawerState, [anchor]: open });
  };
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
  ];
  return (
    <>
      <Dialog
        open={dialogBoxPatientReport.patientRecordDoctorDialog}
        onClose={()=> dispatch(patientRecordDoctorDialogBox(false))}
        aria-labelledby="alert-dialog-title-action-view-report-or-summary"
        aria-describedby="alert-dialog-description-action-view-report-or-summary"
      >
        <DialogTitle id="alert-dialog-title-action-view-report-or-summary">
          Notice
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description-action-view-report-or-summary">
            We tryied to show you accurate summary but if you find any little bit confused then please reports
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>navigate('/dashboard/doctor/patient/0/records/0/file/docx')}>Summary</Button>
          <Button autoFocus onClick={()=>navigate('/dashboard/doctor/patient/0/records/0/file/pdf')}>
            Test View
          </Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 1, height: 500 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            columnBuffer={8}
            onRowClick={toggleDrawer("bottom", true)}
            density="comfortable"
            editMode="row"
            hideFooterSelectedRowCount={true}
            className="datagrid-table-toolbar"
            disableSelectionOnClick={true}
          />
        </Paper>
      </Container>
      <Box>
        <Drawer
          anchor={"bottom"}
          open={drawerState["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          <DownDrawerListPatientDetails />
        </Drawer>
      </Box>
    </>
  );
};
export default PatientDoctorRecords;
