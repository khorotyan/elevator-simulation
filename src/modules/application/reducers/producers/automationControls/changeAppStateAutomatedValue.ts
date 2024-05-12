import { IApplicationState } from "../../state";
import { produce } from "immer";
import { applicationChangeAppStateAutomatedValueAction } from "../../../actions/automationControls/changeAppStateAutomatedValue";

export const applicationChangeAppStateAutomatedValueProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { isAutomated },
    }: ReturnType<typeof applicationChangeAppStateAutomatedValueAction>
  ) => {
    draftState.automationControls.isAppStateAutomated = isAutomated;
  }
);
