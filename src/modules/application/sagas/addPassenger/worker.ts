import type { SagaIterator } from "redux-saga";
import { put, select } from "redux-saga/effects";
import { applicationAddPassengerAction } from "../../actions/addPassenger";
import { applicationElevatorsSelector } from "../../selectors/elevators";
import { calculateElevatorPenalty } from "./elevatorPenaltyCalculations";
import { applicationUpdatePassengerAction } from "../../actions/updatePassenger";
import { applicationUpdateElevatorAction } from "../../actions/updateElevator";
import { Direction } from "../../reducers/enums";
import { applicationPassengersElevatorIdWithSameMovementSelector } from "../../selectors/passengers/passengerElevatorId";
import { sortTargetFloors } from "../../../../utils/sortTargetFloors";

// when a passenger is added, we need to find the best elevator to assign to the passenger
// preferably this calculation, including storing all the elevator and customer information would have been done in backend
// but for the sake of this exercise, its done in frontend
export function* applicationAddPassengerWorker(
  action: ReturnType<typeof applicationAddPassengerAction>
): SagaIterator {
  const { id, initialFloor, targetFloor } = action.payload;

  const elevators: ReturnType<typeof applicationElevatorsSelector> =
    yield select(applicationElevatorsSelector);

  let bestElevatorId: number = -1;
  let lowestPenalty = Infinity;

  const passengerElevatorId = yield select(
    applicationPassengersElevatorIdWithSameMovementSelector,
    { initialFloor, targetFloor }
  );
  if (passengerElevatorId) {
    bestElevatorId = passengerElevatorId;
  } else {
    Object.values(elevators).forEach((elevator) => {
      // calculate the penalty for each elevator moving to the passenger's initial floor
      // and taking the passenger to the target floor
      const currentPenalty = calculateElevatorPenalty({
        elevator,
        passenger: { initialFloor, targetFloor },
      });

      // elevator with the lowest penalty is the best elevator
      if (currentPenalty < lowestPenalty) {
        lowestPenalty = currentPenalty;
        bestElevatorId = elevator.id;
      }
    });
  }

  // set the passenger target elevator value
  yield put(
    applicationUpdatePassengerAction({
      id,
      targetElevatorId: bestElevatorId,
    })
  );

  // add the passenger target floor to the elevator target floors if it doesn't exist
  // and update target floors based on current floor, elevator direction and existing floors
  const { targetFloors, currentFloor, direction } = elevators[bestElevatorId];
  if (!targetFloors.includes(initialFloor)) {
    const newTargetFloors = sortTargetFloors({
      targetFloors,
      newFloor: initialFloor,
      currentFloor,
      direction,
    });

    const elevator = {
      ...elevators[bestElevatorId],
      targetFloors: newTargetFloors,
    };
    elevator.direction =
      newTargetFloors[0] > currentFloor ? Direction.UP : Direction.DOWN;
    yield put(applicationUpdateElevatorAction(elevator));
  }
}
