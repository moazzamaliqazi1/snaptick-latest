import React from "react";
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";
import Cookies from "universal-cookie";
import { Paper, Typography } from "@mui/material";
const defaultNotes = [
    {
        "id": "65b86f37-d8ae-48ef-93aa-b7f7f1e5d43f",
        "text": "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC\n",
        "position": {
            "x": 0,
            "y": 0
        },
        "color": "hsl(108,50%, 50%)",
        "selected": false,
        "datetime": "2022-04-03 20:16:24",
        "menu": false
    },
    {
        "id": "2532b502-51d1-444a-9718-3998a13b1cf4",
        "color": "hsl(0,50%, 50%)",
        "text": "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC",
        "selected": true,
        "position": {
            "x": 232,
            "y": 0,
            "px": 0,
            "py": 0
        },
        "menu": false,
        "hidden": false,
        "datetime": "2022-04-03 20:16:35"
    }
]
const PatientAppointmentNotes = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <>
      <Paper elevation={5} sx={{ p: 1, mb: 3 }}>
        <Typography variant="h6" component="h6" color="primary">
          Notes
        </Typography>
      </Paper>
      <ReactStickyNotes
        sessionKey={token}
        containerWidth="100%"
        containerHeight="500px"
        notes={defaultNotes}
        footer={true}
        onChange={(type, payload, notes)=>{
            console.log(type)
            console.log(payload)
            console.log(notes)
        }}
      />
    </>
  );
};
export default PatientAppointmentNotes;
