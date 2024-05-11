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
import { Passenger } from "../../../modules/application/reducers/state";

const tableColumnNames = ["ID", "Current Floor", "Target Floor", "In Elevator"];

const passengers: Passenger[] = [
  { id: 1, currentFloor: 0, targetFloor: 4, inElevator: false },
  { id: 2, currentFloor: 6, targetFloor: 0, inElevator: false },
  { id: 3, currentFloor: 8, targetFloor: 0, inElevator: false },
];

const PassengerTable: React.FC = () => {
  const classes = useStyles();

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
            {passengers.map(({ id, currentFloor, targetFloor, inElevator }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{currentFloor}</TableCell>
                <TableCell>{targetFloor}</TableCell>
                <TableCell>{inElevator ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PassengerTable;
