import { applicationPassengersSelector } from ".";
import { IState } from "../../../../utils/store/state";

interface Options {
  initialFloor: number;
  targetFloor: number;
}

export function applicationPassengersElevatorIdWithSameMovementSelector(
  state: IState,
  { initialFloor, targetFloor }: Options
): number | undefined {
  const passengers = applicationPassengersSelector(state);

  return (
    Object.values(passengers).filter(
      (passenger) =>
        passenger.initialFloor === initialFloor &&
        passenger.targetFloor === targetFloor
    )[0]?.targetElevatorId ?? undefined
  );
}
