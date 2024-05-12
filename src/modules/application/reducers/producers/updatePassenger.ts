import { IApplicationState } from "../state";
import { produce } from "immer";
import { applicationUpdatePassengerAction } from "../../actions/updatePassenger";

export const applicationUpdatePassengerProducer = produce(
  (
    draftState: IApplicationState,
    { payload }: ReturnType<typeof applicationUpdatePassengerAction>
  ) => {
    const { id, ...otherProps } = payload;

    if (draftState.passengers[id]) {
      Object.assign(draftState.passengers[id], otherProps);
    }
  }
);
