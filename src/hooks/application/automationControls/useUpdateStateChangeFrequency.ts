import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationUpdateStateChangeFrequencyAction } from "../../../modules/application/actions/automationControls/updateStateChangeFrequency";

export function useUpdateStateChangeFrequency(): ({
  frequency,
}: ReturnType<
  typeof applicationUpdateStateChangeFrequencyAction
>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ frequency }) => {
      dispatch(
        applicationUpdateStateChangeFrequencyAction({
          frequency,
        })
      );
    },
    [dispatch]
  );
}
