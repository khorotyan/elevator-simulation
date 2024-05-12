import { SagaIterator } from "redux-saga";
import { put, select } from "redux-saga/effects";
import { applicationElevatorsSelector } from "../../selectors/elevators";
import { applicationUpdateElevatorAction } from "../../actions/updateElevator";
import { applicationPassengerWithInitialFloorSelector } from "../../selectors/passengers/passengerWithInitialFloor";
import { applicationUpdatePassengerAction } from "../../actions/updatePassenger";
import { applicationPassengerWithTargetFloorSelector } from "../../selectors/passengers/passengerWithTargetFloor";
import { applicationRemovePassengerAction } from "../../actions/removePassenger";
import { Direction, Status } from "../../reducers/enums";

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
        elevatorClone.status = Status.IDLE;

        // if reached target floor, remove it from the target floors
        elevatorClone.targetFloors.shift();

        // get passenger that is moving from elevatorTargetFloor (starts from)
        // update passenger state to be "inElevator: true"
        // update elevator targetFloors to include passenger targetFloor
        // NOTE: we do not move the elevator in this case as its opening/closing doors
        let passenger = yield select(
          applicationPassengerWithInitialFloorSelector,
          {
            initialFloor: elevatorTargetFloor,
          }
        );
        if (passenger) {
          elevatorClone.status = Status.ENTERING;

          yield put(
            applicationUpdatePassengerAction({
              id: passenger.id,
              inElevator: true,
            })
          );

          if (!elevator.targetFloors.includes(passenger.targetFloor)) {
            elevatorClone.targetFloors.push(passenger.targetFloor);
          }
        }

        // get passenger that needs to go to elevatorTargetFloor (ends at)
        // remove passenger
        passenger = yield select(applicationPassengerWithTargetFloorSelector, {
          targetFloor: elevatorTargetFloor,
        });
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

      if (elevatorClone.currentFloor < elevatorTargetFloor) {
        elevatorClone.direction = Direction.UP;
        elevatorClone.status = Status.UP;
      } else if (elevatorClone.currentFloor > elevatorTargetFloor) {
        elevatorClone.direction = Direction.DOWN;
        elevatorClone.status = Status.DOWN;
      }

      yield put(applicationUpdateElevatorAction(elevatorClone));
    }
  }
}
