import { IApplicationState } from "../../state";
import { produce } from "immer";
import { applicationUpdateStateChangeFrequencyAction } from "../../../actions/automationControls/updateStateChangeFrequency";

export const applicationUpdateStateChangeFrequencyProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { frequency },
    }: ReturnType<typeof applicationUpdateStateChangeFrequencyAction>
  ) => {
    draftState.automationControls.stateChangeFrequency = frequency;
  }
);
