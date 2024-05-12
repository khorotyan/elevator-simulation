import { applicationUpdateElevatorTargetFloorsAction } from "../../actions/updateElevatorTargetFloors";
import { IApplicationState } from "../state";
import { produce } from "immer";

export const applicationUpdateElevatorTargetFloorsProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { elevatorId, targetFloors },
    }: ReturnType<typeof applicationUpdateElevatorTargetFloorsAction>
  ) => {
    draftState.elevators[elevatorId].targetFloors = targetFloors;
  }
);
