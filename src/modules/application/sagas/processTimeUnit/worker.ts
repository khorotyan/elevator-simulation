import { SagaIterator } from "redux-saga";
import { put, select } from "redux-saga/effects";
import { applicationElevatorsSelector } from "../../selectors/elevators";
import { applicationUpdateElevatorAction } from "../../actions/updateElevator";
import { applicationPassengersWithInitialFloorSelector } from "../../selectors/passengers/passengerWithInitialFloor";
import { applicationUpdatePassengerAction } from "../../actions/updatePassenger";
import { applicationPassengersWithTargetFloorSelector } from "../../selectors/passengers/passengerWithTargetFloor";
import { applicationRemovePassengerAction } from "../../actions/removePassenger";
import { Direction, Status } from "../../reducers/enums";
import { sortTargetFloors } from "../../../../utils/sortTargetFloors";

export function* applicationProcessTimeUnitWorker(): SagaIterator {
  const elevators: ReturnType<typeof applicationElevatorsSelector> =
    yield select(applicationElevatorsSelector);

  for (const elevator of Object.values(elevators)) {
    if (elevator.targetFloors.length > 0) {
      const elevatorTargetFloor = elevator.targetFloors[0];
      const elevatorClone = {
        ...elevator,
        targetFloors: [...elevator.targetFloors],
      };

      if (elevator.currentFloor < elevatorTargetFloor) {
        elevatorClone.currentFloor++; // move to the target floor
      } else if (elevator.currentFloor > elevatorTargetFloor) {
        elevatorClone.currentFloor--; // move to the target floor
      } else {
        elevatorClone.direction = Direction.IDLE;

        // if reached target floor, remove it from the target floors
        elevatorClone.targetFloors.shift();

        // get passengers that are moving from elevatorTargetFloor (starts from)
        // update passengers state to be "inElevator: true"
        // update elevator targetFloors to include targetFloor
        // NOTE: we do not move the elevator in this case as its opening/closing doors
        let passengers = yield select(
          applicationPassengersWithInitialFloorSelector,
          {
            initialFloor: elevatorTargetFloor,
          }
        );
        for (const passenger of passengers) {
          if (passenger) {
            elevatorClone.status = Status.ENTERING;

            yield put(
              applicationUpdatePassengerAction({
                id: passenger.id,
                inElevator: true,
              })
            );

            // add passenger target floor to elevator target floors and sort target floors
            if (!elevator.targetFloors.includes(passenger.targetFloor)) {
              const newTargetFloors = sortTargetFloors({
                targetFloors: elevatorClone.targetFloors,
                newFloor: passenger.targetFloor,
                currentFloor: elevatorClone.currentFloor,
                direction: elevatorClone.direction,
              });

              elevatorClone.targetFloors = newTargetFloors;
            }
          }
        }

        // get passengers that needs to go to elevatorTargetFloor (ends at)
        // remove those passengers as they exited the elevator
        passengers = yield select(
          applicationPassengersWithTargetFloorSelector,
          {
            targetFloor: elevatorTargetFloor,
          }
        );
        for (const passenger of passengers) {
          if (passenger) {
            yield put(
              applicationUpdatePassengerAction({
                id: passenger.id,
                inElevator: false,
              })
            );

            yield put(applicationRemovePassengerAction({ id: passenger.id }));
          }
        }
      }

      // update elevator direction and status
      if (elevatorClone.currentFloor < elevatorTargetFloor) {
        elevatorClone.direction = Direction.UP;
        elevatorClone.status = Status.UP;
      } else if (elevatorClone.currentFloor > elevatorTargetFloor) {
        elevatorClone.direction = Direction.DOWN;
        elevatorClone.status = Status.DOWN;
      }

      if (elevatorClone.targetFloors.length === 0) {
        elevatorClone.status = Status.IDLE;
      }

      yield put(applicationUpdateElevatorAction(elevatorClone));
    }
  }
}
