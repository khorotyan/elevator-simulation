import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationAddPassengerAction } from "../../modules/application/actions/addPassenger";

export function useAddPassenger(): ({
  initialFloor,
  targetFloor,
}: ReturnType<typeof applicationAddPassengerAction>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ initialFloor, targetFloor }) => {
      dispatch(
        applicationAddPassengerAction({
          initialFloor,
          targetFloor,
        })
      );
    },
    [dispatch]
  );
}
