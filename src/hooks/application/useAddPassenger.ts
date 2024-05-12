import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationAddPassengerAction } from "../../modules/application/actions/addPassenger";
import { v4 as uuidv4 } from "uuid";

export function useAddPassenger(): ({
  initialFloor,
  targetFloor,
}: Omit<
  ReturnType<typeof applicationAddPassengerAction>["payload"],
  "id"
>) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ initialFloor, targetFloor }) => {
      const id = uuidv4();

      dispatch(
        applicationAddPassengerAction({
          id,
          initialFloor,
          targetFloor,
        })
      );
    },
    [dispatch]
  );
}
