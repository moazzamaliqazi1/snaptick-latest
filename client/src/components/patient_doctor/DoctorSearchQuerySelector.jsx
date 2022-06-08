import React from "react";
import { Box, Grid } from "@mui/material";
import Select from "react-select";
import { daysSelector } from "../../constraints/index";
import { useDispatch, useSelector } from "react-redux";
import { setDoctorSearch } from "../../redux/action";

const DoctorSearchQuerySelector = () => {
  const dispatch = useDispatch();
  const querySearch = useSelector((state) => state.doctorSearch);
  const setSearchQuery = (item, key) => {
    dispatch(
      setDoctorSearch({
        ...querySearch,
        [key]: [...item.map((selector) => selector.value)],
      })
    );
  };
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Select
              isMulti
              name="days"
              options={daysSelector}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(value) => setSearchQuery(value, "days")}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default DoctorSearchQuerySelector;
