import React, { useState } from "react";
import { Box } from "@mui/material";
import ReactDataGrid from "@inovua/reactdatagrid-community";
const columns = [
  {
    name: "file_name",
    header: "File Name",
    defaultFlex: 1,
  },
  {
    name: "action",
    header: "Action",
    defaultFlex: 1,
  },
  {
    name: "summary",
    header: "Summary",
    defaultFlex: 1,
  },
];
const gridStyle = { minHeight: 550 };

const PatientMeetingDocuments = (props) => {
  const [rows, setRows] = useState([]);
  const { documents, profile } = props;
  if (profile.user_type === "doctor" && documents.length > 0) {
    setRows([]);
    for (const reports of documents) {
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
  if (profile.user_type === "doctor") {
    return (
      <>
        <Box>
          <ReactDataGrid
            idProperty="id"
            columns={columns}
            dataSource={rows}
            style={gridStyle}
            pagination
            defaultLimit={10}
            onCellClick={(event, value) => {
              if (value.data.action === "View") {
                window.open(
                  `/file-view/${value.data.file_name}/${
                    value.data.id.split(".$")[1]
                  }`,
                  "_blank"
                );
              }
            }}
          />
        </Box>
      </>
    );
  } else {
    return null;
  }
};
export default PatientMeetingDocuments;
