import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./basictable.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Aiden Pearce", 18908424, "2 March 2022"),
  createData("Marcus Holloway", 18908424, "2 March 2022"),
  createData("Edward Kenway", 18908424, "2 March 2022"),
  createData("Ezio Auditore", 18908424, "2 March 2022"),
  createData("Vaas Montenegro", 18908424, "2 March 2022"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>

                <TableCell sx={{ maxWidth: 100 }} align="left">
                  <div className="button-group">
                    <button className="butt status approve">Approve</button>
                    <button className="butt status reject">Reject</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
