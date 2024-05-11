import { useSelector } from "react-redux";
import { IState } from "../../helpers/store/state";
import { applicationElevatorsSelector } from "../../modules/application/selectors/elevators";

export function useElevators() {
  return useSelector<IState, ReturnType<typeof applicationElevatorsSelector>>(
    (state) => applicationElevatorsSelector(state)
  );
}
