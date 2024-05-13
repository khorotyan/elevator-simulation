import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import classNames from "classnames";
import useStyles from "../style";
import { useFloorsCount } from "../../../hooks/application/useFloorsCount";
import { useElevators } from "../../../hooks/application/useElevators";
import { Status } from "../../../modules/application/reducers/enums";

const minRowsPerPage = 50;

const ElevatorTable: React.FC = () => {
  const classes = useStyles();
  const floorsCount = useFloorsCount();
  const elevators = useElevators();

  const [rowsPerPage, setRowsPerPage] = useState(minRowsPerPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const initialPage = Math.max(0, Math.ceil(floorsCount / rowsPerPage) - 1);
    setPage(initialPage);
  }, [floorsCount, rowsPerPage]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(Math.max(0, Math.ceil(floorsCount / newRowsPerPage) - 1));
  };

  const getStatus = (
    currentFloor: number,
    floor: number,
    status: Status,
    targetFloors: number[]
  ) => {
    if (currentFloor === floor) {
      return status;
    }

    // show elevator target floors by their order
    if (targetFloors.includes(floor)) {
      return targetFloors.indexOf(floor) + 1;
    }

    return "";
  };

  return (
    <Paper className={classes.tableWrapper}>
      <h2 className={classes.tableTitle}>Elevators</h2>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                className={classNames(
                  classes.stickyHeader,
                  classes.stickyColumn,
                  classes.boldText
                )}
              >
                Floor
              </TableCell>
              {Object.keys(elevators).map((key) => (
                <TableCell
                  key={key}
                  className={classNames(
                    classes.stickyHeader,
                    classes.boldText,
                    classes.elevatorCell
                  )}
                >
                  E{key}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: floorsCount })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((_, index) => {
                const floor = floorsCount - (page * rowsPerPage + index) - 1;

                return (
                  <TableRow key={floor}>
                    <TableCell
                      className={classNames(
                        classes.stickyColumn,
                        classes.boldText
                      )}
                    >
                      {floor}
                    </TableCell>
                    {Object.values(elevators).map(
                      ({ id, currentFloor, status, targetFloors }) => (
                        <TableCell key={id}>
                          {getStatus(currentFloor, floor, status, targetFloors)}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[50, 100]}
        component="div"
        count={floorsCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ElevatorTable;
