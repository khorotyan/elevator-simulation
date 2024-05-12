import { createAction } from "typesafe-actions";

interface Payload {
  elevatorId: number;
  targetFloors: number[];
}

export const applicationUpdateElevatorTargetFloorsAction = createAction(
  "@application/UPDATE_ELEVATOR_TARGET_FLOORS"
)<Payload>();
