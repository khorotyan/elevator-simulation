import { useSelector } from "react-redux";
import { IState } from "../../helpers/store/state";
import { applicationFloorsCountSelector } from "../../modules/application/selectors/floorsCount";

export function useFloorsCount() {
  return useSelector<IState, ReturnType<typeof applicationFloorsCountSelector>>(
    (state) => applicationFloorsCountSelector(state)
  );
}
