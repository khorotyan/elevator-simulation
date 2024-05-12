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
import { applicationChangeAppStateAutomatedValueAction } from "../actions/automationControls/changeAppStateAutomatedValue";
import { applicationChangeAppStateAutomatedValueProducer } from "./producers/automationControls/changeAppStateAutomatedValue";
import { applicationChangePassengerCreationAutomatedValueAction } from "../actions/automationControls/changePassengerCreationAutomatedValue";
import { applicationChangePassengerCreationAutomatedValueProducer } from "./producers/automationControls/changePassengerCreationAutomatedValue";
import { applicationUpdatePassengerCreationFrequencyAction } from "../actions/automationControls/updatePassengerCreationFrequency";
import { applicationUpdatePassengerCreationFrequencyProducer } from "./producers/automationControls/updatePassengerCreationFrequency";
import { applicationUpdateStateChangeFrequencyAction } from "../actions/automationControls/updateStateChangeFrequency";
import { applicationUpdateStateChangeFrequencyProducer } from "./producers/automationControls/updateStateChangeFrequency";

export const initialApplicationState: IApplicationState = {
  passengers: {},
  elevators: {},
  floorsCount: 0,
  automationControls: {
    isPassengerCreationAutomated: false,
    isAppStateAutomated: false,
    passengerCreationFrequency: 0,
    stateChangeFrequency: 0,
  },
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
  )
  .handleAction(
    applicationChangePassengerCreationAutomatedValueAction,
    applicationChangePassengerCreationAutomatedValueProducer
  )
  .handleAction(
    applicationChangeAppStateAutomatedValueAction,
    applicationChangeAppStateAutomatedValueProducer
  )
  .handleAction(
    applicationUpdatePassengerCreationFrequencyAction,
    applicationUpdatePassengerCreationFrequencyProducer
  )
  .handleAction(
    applicationUpdateStateChangeFrequencyAction,
    applicationUpdateStateChangeFrequencyProducer
  );
