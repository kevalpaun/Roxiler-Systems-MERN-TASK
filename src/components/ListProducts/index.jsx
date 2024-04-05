import React, { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "./Table";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
  Paper,
  TablePagination,
} from "@mui/material";
const months = [
  {
    label: "January",
    value: 1,
  },
  {
    label: "Fabruary",
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

const List = ({ search, selectedMonth }) => {
  const [productData, setProductData] = useState([]);
  // const [selectedMonth, setSelectedMonth] = useState(3);
  // const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/listProduct/${selectedMonth}?page=${page}&pageSize=${pageSize}&search=${search}`
      )
      .then(({ data }) => {
        console.log("data", data);
        setProductData(data.data.rows);
      })
      .catch((err) => console.log(err));
  }, [selectedMonth, page, pageSize, search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1);
  };
  return (
    <Paper elevation={1} style={{ margin: "10px" }}>
      <Box>
        <TableComponent
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          data={productData}
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={productData.length}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};

export default List;
