import { IState } from "../../../utils/store/state";
import { Elevator } from "../reducers/state";

export function applicationElevatorsSelector(
  state: IState
): Record<string, Elevator> {
  return state.application?.elevators ?? {};
}
