import { useSelector } from "react-redux";
import { IState } from "../../../utils/store/state";
import { applicationIsPassengerCreationAutomatedSelector } from "../../../modules/application/selectors/automationControls/isPassengerCreationAutomated";

export function useIsPassengerCreationAutomated(): ReturnType<
  typeof applicationIsPassengerCreationAutomatedSelector
> {
  return useSelector<
    IState,
    ReturnType<typeof applicationIsPassengerCreationAutomatedSelector>
  >((state) => applicationIsPassengerCreationAutomatedSelector(state));
}
