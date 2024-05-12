import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationProcessTimeUnitAction } from "../../modules/application/actions/processTimeUnit";

export function useProcessTimeUnit(): () => void {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(applicationProcessTimeUnitAction());
  }, [dispatch]);
}
