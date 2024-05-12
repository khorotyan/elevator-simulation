import { IApplicationState } from "../../state";
import { produce } from "immer";
import { applicationChangePassengerCreationAutomatedValueAction } from "../../../actions/automationControls/changePassengerCreationAutomatedValue";

export const applicationChangePassengerCreationAutomatedValueProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { isAutomated },
    }: ReturnType<typeof applicationChangePassengerCreationAutomatedValueAction>
  ) => {
    draftState.automationControls.isPassengerCreationAutomated = isAutomated;
  }
);
