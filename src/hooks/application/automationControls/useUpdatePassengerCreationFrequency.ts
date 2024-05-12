import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationUpdatePassengerCreationFrequencyAction } from "../../../modules/application/actions/automationControls/updatePassengerCreationFrequency";

export function useUpdatePassengerCreationFrequency(): ({
  frequency,
}: ReturnType<
  typeof applicationUpdatePassengerCreationFrequencyAction
>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ frequency }) => {
      dispatch(
        applicationUpdatePassengerCreationFrequencyAction({
          frequency,
        })
      );
    },
    [dispatch]
  );
}
