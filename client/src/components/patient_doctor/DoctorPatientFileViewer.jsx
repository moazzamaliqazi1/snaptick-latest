import React from "react";
import { useParams } from "react-router-dom";
import FileViewer from "react-file-viewer";
const DoctorPatientFileViewer = () => {
  const params = useParams();
  return (
    <>
      <FileViewer
        fileType={params.file_id}
        filePath={
          params.file_id === "pdf"
            ? "http://localhost:3000/final_preparation.pdf"
            : "http://localhost:3000/final_preparation.docx"
        }
        onError={(err) => console.log(err)}
      />
    </>
  );
};
export default DoctorPatientFileViewer;
