import { createAction } from "typesafe-actions";

interface Payload {
  isAutomated: boolean;
}

export const applicationChangePassengerCreationAutomatedValueAction =
  createAction(
    "@application/CHANGE_PASSENGER_CREATION_AUTOMATION_VALUE"
  )<Payload>();
