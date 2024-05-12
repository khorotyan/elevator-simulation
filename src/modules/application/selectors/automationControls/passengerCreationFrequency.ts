import { IState } from "../../../../utils/store/state";

export function applicationPassengerCreationFrequencySelector(
  state: IState
): number {
  return state.application?.automationControls?.passengerCreationFrequency ?? 2;
}
