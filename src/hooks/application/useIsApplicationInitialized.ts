import { useFloorsCount } from "./useFloorsCount";

export function useIsApplicationInitialized() {
  const floorsCount = useFloorsCount();
  return floorsCount > 1;
}
