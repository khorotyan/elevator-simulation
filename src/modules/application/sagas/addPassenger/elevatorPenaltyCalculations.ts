import { Direction } from "../../reducers/enums";
import { Elevator, Passenger as ElevatorPassenger } from "../../reducers/state";

interface Options {
  elevator: Elevator;
  passenger: Passenger;
}

interface Passenger
  extends Pick<ElevatorPassenger, "initialFloor" | "targetFloor"> {}

// calculate total penalty for the elevator to reach the passenger and take them to their target floor
// the penalty is calculated based on the direction of the elevator, number of stops it has to make, and total floors to get there
// each efficiencies are weighted based on their time impact, e.g. opening/closing doors takes 3 seconds, while moving between floors takes 1 second
export function calculateElevatorPenalty({
  elevator,
  passenger,
}: Options): number {
  // penalize direction if the elevator is moving to the opposite direction
  const directionPenalty = getDirectionPenalty(elevator, passenger);

  // count number of stops to reach the passenger floor and take to the target floor
  const routeEfficiencyPenalty = getRouteEfficiencyPenalty(elevator, passenger);

  // time to reach passenger (floor difference)
  const proximityPenalty = Math.abs(
    elevator.currentFloor - passenger.initialFloor
  );

  return directionPenalty + routeEfficiencyPenalty + proximityPenalty;
}

// calculate penalty based on elevator direction
function getDirectionPenalty(elevator: Elevator, passenger: Passenger): number {
  const passengerDirection =
    passenger.targetFloor > passenger.initialFloor
      ? Direction.UP
      : Direction.DOWN;

  if (elevator.direction === Direction.IDLE) {
    return 1; // minimal penalty for idle as we prefer an already moving elevator towards the passenger
  } else if (elevator.direction === passengerDirection) {
    if (
      (passengerDirection === Direction.UP &&
        elevator.currentFloor <= passenger.initialFloor) ||
      (passengerDirection === Direction.DOWN &&
        elevator.currentFloor >= passenger.initialFloor)
    ) {
      return 0; // no penalty as the elevator is moving towards the passenger
    }
  }
  return 10; // try to avoid assigning elevators moving to the opposite direction
}

// calculate penalty based on the route efficiency of the elevator (number of stops to be made)
function getRouteEfficiencyPenalty(
  elevator: Elevator,
  passenger: Passenger
): number {
  // no stops to be made if the elevator is idle
  if (elevator.direction === Direction.IDLE) {
    return 0;
  }

  const direction = elevator.direction === Direction.UP ? 1 : -1;

  // get number of stops from elevator current floor to passenger initial floor
  const stopsToPickup = elevator.targetFloors
    .filter((floor) =>
      direction === 1
        ? floor >= elevator.currentFloor
        : floor <= elevator.currentFloor
    )
    .sort((a, b) => direction * (a - b));

  // find the index of the passenger initial floor in the stops to pickup
  const pickupStopIndex = stopsToPickup.findIndex((floor) =>
    direction === 1
      ? floor >= passenger.initialFloor
      : floor <= passenger.initialFloor
  );

  // number of stops from passenger initial floor to target floor
  const stopsToTarget = elevator.targetFloors
    .filter((floor) =>
      direction === 1
        ? floor >= passenger.initialFloor
        : floor <= passenger.initialFloor
    )
    .sort((a, b) => direction * (a - b));

  // find the index of the passenger target floor in the stops to target
  const targetStopIndex = stopsToTarget.findIndex((floor) =>
    direction === 1
      ? floor >= passenger.targetFloor
      : floor <= passenger.targetFloor
  );

  // total penalty = stops to pickup + stops to target
  const stopsToPickupPenalty =
    pickupStopIndex === -1 ? stopsToPickup.length : pickupStopIndex;
  const stopsToTargetPenalty =
    targetStopIndex === -1 ? stopsToTarget.length : targetStopIndex;

  // it takes 3 seconds to open/close the doors
  const penaltyMultiplier = 3;

  return penaltyMultiplier * (stopsToPickupPenalty + stopsToTargetPenalty);
}
