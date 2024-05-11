import { IState } from "../../../utils/store/state";

export function applicationFloorsCountSelector(state: IState): number {
  return state.application?.floorsCount ?? 2;
}
