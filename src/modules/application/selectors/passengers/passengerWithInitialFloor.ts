import { applicationPassengersSelector } from ".";
import { IState } from "../../../../utils/store/state";
import { Passenger } from "../../reducers/state";

interface Options {
  initialFloor: number;
}

export function applicationPassengersWithInitialFloorSelector(
  state: IState,
  { initialFloor }: Options
): Passenger[] {
  const passengers = applicationPassengersSelector(state);

  // get passenger with initial floor equal to the provided initialFloor
  return Object.values(passengers).filter(
    (passenger) => passenger.initialFloor === initialFloor
  );
}
