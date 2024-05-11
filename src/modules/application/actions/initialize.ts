import { createAction } from "typesafe-actions";

interface Payload {
  elevatorsCount: number;
  floorsCount: number;
}

export const applicationInitializeAction = createAction(
  "@application/INITIALIZE"
)<Payload>();
