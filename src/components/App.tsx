import React from "react";
import useStyles from "./style";
import ElevatorTable from "./Tables/Elevator";
import PassengerTable from "./Tables/Passenger";
import Initializer from "./Initializer";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.AppContainer}>
      <Initializer />
      <ElevatorTable />
      <PassengerTable />
    </div>
  );
};

export default App;
