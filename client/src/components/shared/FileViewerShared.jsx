import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FileViewer from "react-file-viewer";

const FileViewerShared = () => {
  const params = useParams();
  const { file_key, ext } = params;
  return (
    <>
      <FileViewer
        fileType={ext}
        filePath={`${process.env.REACT_APP_SUPABASE_DOCUMENT_URL}/medica-documents/public/${file_key}`}
        onError={(err) => console.log(err)}
      />
    </>
  );
};
export default FileViewerShared;
