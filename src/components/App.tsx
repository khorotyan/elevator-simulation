import React from "react";
import useStyles from "./style";
import ElevatorTable from "./Tables/Elevator";
import PassengerTable from "./Tables/Passenger";
import InitializerForm from "./forms/Initializer";
import PassengerForm from "./forms/Passenger";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.AppContainer}>
      <InitializerForm />
      <ElevatorTable />
      <PassengerForm />
      <PassengerTable />
    </div>
  );
};

export default App;
