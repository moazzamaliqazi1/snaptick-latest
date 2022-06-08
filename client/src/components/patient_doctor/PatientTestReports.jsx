import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Container } from "@mui/material";
import { useSelector } from "react-redux";
import PatientDocumentsUpload from "./PatientDocumentsUpload";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useNavigate } from "react-router-dom";
const columns = [
  {
    name: "file_name",
    header: "File Name",
    defaultFlex: 1
  },
  {
    name: "action",
    header: "Action",
    defaultFlex: 1,
  },
];
const gridStyle = { minHeight: 550 }
const PatientBasicInfoChange = () => {
  const navigate = useNavigate()
  const profile = useSelector((state) => state.user);
  const [rows, setRows] = useState([]);
  const refreshTestReports = () => {
    if (profile && profile.test_reports) {
      setRows([]);
      for (const reports of profile.test_reports) {
        setRows((prev) => {
          return [
            ...prev,
            {
              id: `${reports.key}.$${reports.ext}`,
              file_name: reports.key.replace("medica-documents/public/", ""),
              action: "View",
            },
          ];
        });
      }
    }
  };
  useEffect(() => {
    refreshTestReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <Paper elevation={3} sx={{ p: 1, mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box>
                  <PatientDocumentsUpload />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box>
          <Paper elevation={3} sx={{ p: 1, mt: 5 }}>
            <ReactDataGrid
              idProperty="id"
              columns={columns}
              dataSource={rows}
              style={gridStyle}
              pagination
              defaultLimit={10}
              onCellClick={(event, value)=>{
                if(value.data.action === 'View'){
                  navigate(`/file-view/${value.data.file_name}/${value.data.id.split(".$")[1]}`)
                }
              }}
            />
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default PatientBasicInfoChange;
