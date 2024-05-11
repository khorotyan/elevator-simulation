import { useSelector } from "react-redux";
import { IState } from "../../utils/store/state";
import { applicationPassengersSelector } from "../../modules/application/selectors/passengers";

export function usePassengers(): ReturnType<
  typeof applicationPassengersSelector
> {
  return useSelector<IState, ReturnType<typeof applicationPassengersSelector>>(
    (state) => applicationPassengersSelector(state)
  );
}
