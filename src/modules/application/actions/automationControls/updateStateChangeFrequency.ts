import { createAction } from "typesafe-actions";

interface Payload {
  frequency: number;
}

export const applicationUpdateStateChangeFrequencyAction = createAction(
  "@application/UPDATE_STATE_CHANGE_FREQUENCY"
)<Payload>();
