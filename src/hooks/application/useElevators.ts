import { useSelector } from "react-redux";
import { IState } from "../../utils/store/state";
import { applicationElevatorsSelector } from "../../modules/application/selectors/elevators";

export function useElevators(): ReturnType<
  typeof applicationElevatorsSelector
> {
  return useSelector<IState, ReturnType<typeof applicationElevatorsSelector>>(
    (state) => applicationElevatorsSelector(state)
  );
}
