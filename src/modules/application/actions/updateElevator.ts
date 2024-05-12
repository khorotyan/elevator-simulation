import { createAction } from "typesafe-actions";
import { Elevator } from "../reducers/state";

type Payload = Partial<Omit<Elevator, "id">> & Pick<Elevator, "id">;

export const applicationUpdateElevatorAction = createAction(
  "@application/UPDATE_ELEVATOR"
)<Payload>();
