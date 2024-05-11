import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { applicationInitializeAction } from "../../modules/application/actions/initialize";

export function useInitialize(): ({
  elevatorsCount,
  floorsCount,
}: ReturnType<typeof applicationInitializeAction>["payload"]) => void {
  const dispatch = useDispatch();

  return useCallback(
    ({ elevatorsCount, floorsCount }) => {
      dispatch(
        applicationInitializeAction({
          elevatorsCount,
          floorsCount,
        })
      );
    },
    [dispatch]
  );
}
