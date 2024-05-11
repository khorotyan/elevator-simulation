import { createAction } from "typesafe-actions";

interface Payload {
  initialFloor?: number;
  targetFloor?: number;
}

export const applicationAddPassengerAction = createAction(
  "@application/ADD_PASSENGER"
)<Payload>();
