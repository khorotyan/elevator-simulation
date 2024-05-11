import { createReducer } from "typesafe-actions";
import { IApplicationState } from "./state";
import { applicationInitializeAction } from "../actions/initialize";
import { applicationInitializeProducer } from "./producers/initialize";

export const initialApplicationState: IApplicationState = {
  passengers: {},
  elevators: {},
  floorsCount: 0,
};

export const applicationRootReducer = createReducer(
  initialApplicationState
).handleAction(applicationInitializeAction, applicationInitializeProducer);