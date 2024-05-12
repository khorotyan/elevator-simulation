import { IState } from "../../../../utils/store/state";

export function applicationIsAppStateAutomatedSelector(state: IState): boolean {
  return state.application?.automationControls?.isAppStateAutomated ?? false;
}
