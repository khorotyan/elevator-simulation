import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classNames from "classnames";
import useStyles from "../style";
import { usePassengers } from "../../../hooks/application/usePassengers";

const tableColumnNames = [
  "ID",
  "Initial Floor",
  "Target Floor",
  "Target Elevator ID",
  "In Elevator",
];

const PassengerTable: React.FC = () => {
  const classes = useStyles();
  const passengers = usePassengers();

  return (
    <Paper className={classes.tableWrapper}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <h2 className={classes.tableTitle}>Passengers</h2>
        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              {tableColumnNames.map((columnName) => (
                <TableCell
                  className={classNames(classes.stickyHeader, classes.boldText)}
                  key={columnName}
                >
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(passengers).map(
              ({
                id,
                initialFloor,
                targetFloor,
                targetElevatorId,
                inElevator,
              }) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{initialFloor}</TableCell>
                  <TableCell>{targetFloor}</TableCell>
                  <TableCell>{targetElevatorId}</TableCell>
                  <TableCell>{inElevator ? "Yes" : "No"}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PassengerTable;
