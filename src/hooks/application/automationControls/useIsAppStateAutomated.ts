import { useSelector } from "react-redux";
import { IState } from "../../../utils/store/state";
import { applicationIsAppStateAutomatedSelector } from "../../../modules/application/selectors/automationControls/isAppStateAutomated";

export function useIsAppStateAutomated(): ReturnType<
  typeof applicationIsAppStateAutomatedSelector
> {
  return useSelector<
    IState,
    ReturnType<typeof applicationIsAppStateAutomatedSelector>
  >((state) => applicationIsAppStateAutomatedSelector(state));
}
