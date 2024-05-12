import { useSelector } from "react-redux";
import { IState } from "../../utils/store/state";
import { applicationFloorsCountSelector } from "../../modules/application/selectors/floorsCount";
import { useFloorsCount } from "./useFloorsCount";

export function useIsApplicationInitialized() {
  const floorsCount = useFloorsCount();
  return floorsCount > 1;
}
