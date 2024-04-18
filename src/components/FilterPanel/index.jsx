import { Box, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
const months = [
  {
    label: "January",
    value: 1,
  },
  {
    label: "February",
    value: 2,
  },
  {
    label: "March",
    value: 3,
  },
  {
    label: "April",
    value: 4,
  },
  {
    label: "May",
    value: 5,
  },
  {
    label: "June",
    value: 6,
  },
  {
    label: "July",
    value: 7,
  },
  {
    label: "Auguest",
    value: 8,
  },
  {
    label: "September",
    value: 9,
  },
  {
    label: "October",
    value: 10,
  },
  {
    label: "November",
    value: 11,
  },
  {
    label: "December",
    value: 12,
  },
];
const FilterBar = ({ selectedMonth, setSelectedMonth, search, setSearch }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMonth}
          label="Month"
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => {
            return <MenuItem value={month.value}>{month.label}</MenuItem>;
          })}
        </Select>
      </Box>
    </Box>
  );
};

export default FilterBar;
