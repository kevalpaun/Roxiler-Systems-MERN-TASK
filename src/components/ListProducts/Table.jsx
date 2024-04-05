import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";

export default function TableComponent({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>CATEGORY</TableCell>
            <TableCell>SOLD</TableCell>
            <TableCell>IMAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.sold}</TableCell>
              <TableCell >
                <img src={row?.image} alt={row.title} height={50} width={50}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
