import { createAction } from "typesafe-actions";

interface Payload {
  isAutomated: boolean;
}

export const applicationChangeAppStateAutomatedValueAction = createAction(
  "@application/CHANGE_APP_STATE_AUTOMATION_VALUE"
)<Payload>();
