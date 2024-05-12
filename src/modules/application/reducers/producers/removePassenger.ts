import { IApplicationState } from "../state";
import { produce } from "immer";
import { applicationRemovePassengerAction } from "../../actions/removePassenger";

export const applicationRemovePassengerProducer = produce(
  (
    draftState: IApplicationState,
    { payload: { id } }: ReturnType<typeof applicationRemovePassengerAction>
  ) => {
    delete draftState.passengers[id];
  }
);
