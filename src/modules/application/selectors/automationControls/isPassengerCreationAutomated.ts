import { IState } from "../../../../utils/store/state";

export function applicationIsPassengerCreationAutomatedSelector(
  state: IState
): boolean {
  return (
    state.application?.automationControls?.isPassengerCreationAutomated ?? false
  );
}
