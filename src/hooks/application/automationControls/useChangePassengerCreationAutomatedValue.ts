import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationChangePassengerCreationAutomatedValueAction } from "../../../modules/application/actions/automationControls/changePassengerCreationAutomatedValue";

export function useChangePassengerCreationAutomatedValue(): ({
  isAutomated,
}: ReturnType<
  typeof applicationChangePassengerCreationAutomatedValueAction
>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ isAutomated }) => {
      dispatch(
        applicationChangePassengerCreationAutomatedValueAction({
          isAutomated,
        })
      );
    },
    [dispatch]
  );
}
