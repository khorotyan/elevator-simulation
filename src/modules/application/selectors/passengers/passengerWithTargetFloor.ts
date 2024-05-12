import { applicationPassengersSelector } from ".";
import { IState } from "../../../../utils/store/state";
import { Passenger } from "../../reducers/state";

interface Options {
  targetFloor: number;
}

export function applicationPassengersWithTargetFloorSelector(
  state: IState,
  { targetFloor }: Options
): Passenger[] {
  const passengers = applicationPassengersSelector(state);

  // get passenger with target floor equal to the provided targetFloor
  return Object.values(passengers).filter(
    (passenger) => passenger.targetFloor === targetFloor
  );
}
