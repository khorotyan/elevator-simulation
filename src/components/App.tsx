import React from "react";
import useStyles from "./style";
import ElevatorTable from "./Tables/Elevator";
import PassengerTable from "./Tables/Passenger";
import InitializerForm from "./forms/Initializer";
import PassengerForm from "./forms/Passenger";
import TimeControls from "./TimeControls";
import AutomationControls from "./AutomationControls";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.AppContainer}>
      <h1>Elevator Simulator</h1>
      <InitializerForm />
      <TimeControls />
      <AutomationControls />
      <ElevatorTable />
      <PassengerForm />
      <PassengerTable />
    </div>
  );
};

export default App;
