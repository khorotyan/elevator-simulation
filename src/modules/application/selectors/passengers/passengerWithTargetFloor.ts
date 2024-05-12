import { applicationPassengersSelector } from ".";
import { IState } from "../../../../utils/store/state";
import { Passenger } from "../../reducers/state";

interface Options {
  targetFloor: number;
}

export function applicationPassengerWithTargetFloorSelector(
  state: IState,
  { targetFloor }: Options
): Passenger | undefined {
  const passengers = applicationPassengersSelector(state);

  // get passenger with target floor equal to the provided targetFloor
  return Object.values(passengers).find(
    (passenger) => passenger.targetFloor === targetFloor
  );
}
