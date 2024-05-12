import { createAction } from "typesafe-actions";

interface Payload {
  passengerId: string;
  targetElevatorId: number;
}

export const applicationSetPassengerTargetElevatorIdAction = createAction(
  "@application/SET_PASSENGER_TARGET_ELEVATOR_ID"
)<Payload>();
