import { createAction } from "typesafe-actions";

interface Payload {
  frequency: number;
}

export const applicationUpdatePassengerCreationFrequencyAction = createAction(
  "@application/UPDATE_PASSENGER_CREATION_FREQUENCY"
)<Payload>();
