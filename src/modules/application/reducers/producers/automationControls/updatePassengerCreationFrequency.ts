import { IApplicationState } from "../../state";
import { produce } from "immer";
import { applicationUpdatePassengerCreationFrequencyAction } from "../../../actions/automationControls/updatePassengerCreationFrequency";

export const applicationUpdatePassengerCreationFrequencyProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { frequency },
    }: ReturnType<typeof applicationUpdatePassengerCreationFrequencyAction>
  ) => {
    draftState.automationControls.passengerCreationFrequency = frequency;
  }
);
