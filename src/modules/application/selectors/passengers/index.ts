import { IState } from "../../../../utils/store/state";
import { Passenger } from "../../reducers/state";

export function applicationPassengersSelector(
  state: IState
): Record<string, Passenger> {
  return state.application?.passengers ?? {};
}
