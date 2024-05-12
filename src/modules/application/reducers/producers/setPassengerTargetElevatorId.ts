import { IApplicationState } from "../state";
import { produce } from "immer";
import { applicationSetPassengerTargetElevatorIdAction } from "../../actions/setPassengerTargetElevatorId";

export const applicationSetPassengerTargetElevatorIdProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { passengerId, targetElevatorId },
    }: ReturnType<typeof applicationSetPassengerTargetElevatorIdAction>
  ) => {
    draftState.passengers[passengerId].targetElevatorId = targetElevatorId;
  }
);
