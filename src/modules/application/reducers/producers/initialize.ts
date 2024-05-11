import { IApplicationState } from "../state";
import { applicationInitializeAction } from "../../actions/initialize";
import { produce } from "immer";
import { Direction } from "../enums";

export const applicationInitializeProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { elevatorsCount, floorsCount },
    }: ReturnType<typeof applicationInitializeAction>
  ) => {
    draftState.floorsCount = floorsCount;

    for (let i = 1; i <= elevatorsCount; i++) {
      draftState.elevators[`elevator${i}`] = {
        id: i,
        currentFloor: 0,
        direction: Direction.IDLE,
        targetFloors: [],
      };
    }
  }
);
