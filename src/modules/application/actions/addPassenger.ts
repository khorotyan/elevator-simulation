import { createAction } from "typesafe-actions";

interface Payload {
  id: string;
  initialFloor: number;
  targetFloor: number;
}

export const applicationAddPassengerAction = createAction(
  "@application/ADD_PASSENGER"
)<Payload>();
