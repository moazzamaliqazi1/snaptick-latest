import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setBookAppointmentForm } from "../../redux/action";
import { useNavigate } from "react-router-dom";
const SelectTestReports = () => {
  const navigate = useNavigate();
  const appointmentForm = useSelector((state) => state.appointmentForm);
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="p" component="p" color="primary" sx={{ mb: 1 }}>
          {profile.test_reports && profile.test_reports.length > 0
            ? "Select Test Reports (optional)"
            : "No Test Reports Available. If you want to add your test reports then kindly add test reports from Test Reports section"}
        </Typography>
        {profile.test_reports ? (
          <FormGroup>
            {profile.test_reports.map((reports) => {
              return (
                <Box key={reports._id}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={reports.key.replace("medica-documents/public/", "")}
                    value={reports._id}
                    onChange={(event) => {
                      if (event.target.checked) {
                        const isAlreadyAdd = appointmentForm.test_reports_id.filter((report) => {
                            return report.toString() === event.target.value.toString()
                        });
                        if(isAlreadyAdd.length === 0){
                            dispatch(setBookAppointmentForm({
                                ...appointmentForm,
                                test_reports_id: [...appointmentForm.test_reports_id, event.target.value.toString()]
                            }));
                        }
                      }
                      else {
                        const newArray = appointmentForm.test_reports_id.filter((report) => {
                            return report.toString() !== event.target.value.toString()
                        });
                        dispatch(setBookAppointmentForm({
                            ...appointmentForm,
                            test_reports_id: newArray
                        }));
                      }
                    }}
                  />
                  <Typography
                    variant="span"
                    component="span"
                    color="primary"
                    onClick={() => {
                      navigate(
                        `/file-view/${reports.key.replace(
                          "medica-documents/public/",
                          ""
                        )}/${reports.ext}`
                      );
                    }}
                  >
                    ( View )
                  </Typography>
                </Box>
              );
            })}
          </FormGroup>
        ) : null}
      </Box>
    </>
  );
};
export default SelectTestReports;
