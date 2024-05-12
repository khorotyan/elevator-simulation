import { IState } from "../../../../utils/store/state";

export function applicationStateChangeFrequencySelector(state: IState): number {
  return state.application?.automationControls?.stateChangeFrequency ?? 1;
}
