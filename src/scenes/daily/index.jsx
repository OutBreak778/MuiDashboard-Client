import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Select,
} from "@mui/material";
import Header from "components/Header";
import OverViewChart from "components/OverViewChart";

const Daily = () => {
  const [view, setView] = useState("units");

  return (
    <Box m="1rem 2rem">
      <Header
        title="Daily Overview"
        subTitle="General Revenue Profit on Daily MArgin"
      />
      <Box height="70vh" ml="0">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            label="View"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view} />
      </Box>
    </Box>
  );
};

export default Daily;
