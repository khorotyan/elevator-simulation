import { useSelector } from "react-redux";
import { IState } from "../../../utils/store/state";
import { applicationStateChangeFrequencySelector } from "../../../modules/application/selectors/automationControls/stateChangeFrequency";

export function useStateChangeFrequency(): ReturnType<
  typeof applicationStateChangeFrequencySelector
> {
  return useSelector<
    IState,
    ReturnType<typeof applicationStateChangeFrequencySelector>
  >((state) => applicationStateChangeFrequencySelector(state));
}
