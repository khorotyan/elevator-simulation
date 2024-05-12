import { applicationUpdateElevatorAction as applicationUpdateElevatorAction } from "../../actions/updateElevator";
import { IApplicationState } from "../state";
import { produce } from "immer";

export const applicationUpdateElevatorProducer = produce(
  (
    draftState: IApplicationState,
    { payload }: ReturnType<typeof applicationUpdateElevatorAction>
  ) => {
    const { id, ...otherProps } = payload;

    if (draftState.elevators[id]) {
      Object.assign(draftState.elevators[id], otherProps);
    }
  }
);
