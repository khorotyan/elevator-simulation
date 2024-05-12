import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationChangeAppStateAutomatedValueAction } from "../../../modules/application/actions/automationControls/changeAppStateAutomatedValue";

export function useChangeAppStateAutomatedValue(): ({
  isAutomated,
}: ReturnType<
  typeof applicationChangeAppStateAutomatedValueAction
>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ isAutomated }) => {
      dispatch(
        applicationChangeAppStateAutomatedValueAction({
          isAutomated,
        })
      );
    },
    [dispatch]
  );
}
