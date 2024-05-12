import { createReducer } from "typesafe-actions";
import { IApplicationState } from "./state";
import { applicationInitializeAction } from "../actions/initialize";
import { applicationInitializeProducer } from "./producers/initialize";
import { applicationAddPassengerAction } from "../actions/addPassenger";
import { applicationAddPassengerProducer } from "./producers/addPassenger";
import { applicationSetPassengerTargetElevatorIdProducer } from "./producers/setPassengerTargetElevatorId";
import { applicationSetPassengerTargetElevatorIdAction } from "../actions/setPassengerTargetElevatorId";
import { applicationUpdateElevatorTargetFloorsAction } from "../actions/updateElevatorTargetFloors";
import { applicationUpdateElevatorTargetFloorsProducer } from "./producers/updateElevatorTargetFloors";

export const initialApplicationState: IApplicationState = {
  passengers: {},
  elevators: {},
  floorsCount: 0,
};

export const applicationRootReducer = createReducer(initialApplicationState)
  .handleAction(applicationInitializeAction, applicationInitializeProducer)
  .handleAction(applicationAddPassengerAction, applicationAddPassengerProducer)
  .handleAction(
    applicationSetPassengerTargetElevatorIdAction,
    applicationSetPassengerTargetElevatorIdProducer
  )
  .handleAction(
    applicationUpdateElevatorTargetFloorsAction,
    applicationUpdateElevatorTargetFloorsProducer
  );
