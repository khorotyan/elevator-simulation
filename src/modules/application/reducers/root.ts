import { createReducer } from "typesafe-actions";
import { IApplicationState } from "./state";
import { applicationInitializeAction } from "../actions/initialize";
import { applicationInitializeProducer } from "./producers/initialize";
import { applicationAddPassengerAction } from "../actions/addPassenger";
import { applicationAddPassengerProducer } from "./producers/addPassenger";
import { applicationUpdatePassengerProducer } from "./producers/updatePassenger";
import { applicationUpdatePassengerAction } from "../actions/updatePassenger";
import { applicationUpdateElevatorAction } from "../actions/updateElevator";
import { applicationUpdateElevatorProducer } from "./producers/updateElevator";
import { applicationRemovePassengerAction } from "../actions/removePassenger";
import { applicationRemovePassengerProducer } from "./producers/removePassenger";

export const initialApplicationState: IApplicationState = {
  passengers: {},
  elevators: {},
  floorsCount: 0,
};

export const applicationRootReducer = createReducer(initialApplicationState)
  .handleAction(applicationInitializeAction, applicationInitializeProducer)
  .handleAction(applicationAddPassengerAction, applicationAddPassengerProducer)
  .handleAction(
    applicationUpdatePassengerAction,
    applicationUpdatePassengerProducer
  )
  .handleAction(
    applicationUpdateElevatorAction,
    applicationUpdateElevatorProducer
  )
  .handleAction(
    applicationRemovePassengerAction,
    applicationRemovePassengerProducer
  );
