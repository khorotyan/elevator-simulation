import { IApplicationState } from "../state";
import { produce } from "immer";
import { applicationAddPassengerAction } from "../../actions/addPassenger";

export const applicationAddPassengerProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { id, initialFloor, targetFloor },
    }: ReturnType<typeof applicationAddPassengerAction>
  ) => {
    draftState.passengers[id] = {
      id,
      initialFloor,
      targetFloor,
      inElevator: false,
    };
  }
);
