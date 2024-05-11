import { IState } from "../../../helpers/store/state";

export function applicationFloorsCountSelector(state: IState): number {
  return state.application?.floorsCount || 1;
}
