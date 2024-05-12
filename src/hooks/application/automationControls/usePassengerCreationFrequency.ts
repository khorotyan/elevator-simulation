import { useSelector } from "react-redux";
import { IState } from "../../../utils/store/state";
import { applicationPassengerCreationFrequencySelector } from "../../../modules/application/selectors/automationControls/passengerCreationFrequency";

export function usePassengerCreationFrequency(): ReturnType<
  typeof applicationPassengerCreationFrequencySelector
> {
  return useSelector<
    IState,
    ReturnType<typeof applicationPassengerCreationFrequencySelector>
  >((state) => applicationPassengerCreationFrequencySelector(state));
}
