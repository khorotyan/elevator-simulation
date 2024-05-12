import { createAction } from "typesafe-actions";

interface Payload {
  id: string;
}

export const applicationRemovePassengerAction = createAction(
  "@application/REMOVE_PASSENGER"
)<Payload>();
