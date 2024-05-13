import type { SagaIterator } from "redux-saga";
import { delay, put, select } from "redux-saga/effects";
import { applicationChangePassengerCreationAutomatedValueAction } from "../../actions/automationControls/changePassengerCreationAutomatedValue";
import { applicationAddPassengerAction } from "../../actions/addPassenger";
import { generateRandomFloors } from "../../../../utils/randomFloorsGenerator";
import { applicationFloorsCountSelector } from "../../selectors/floorsCount";
import { v4 as uuidv4 } from "uuid";
import { applicationPassengerCreationFrequencySelector } from "../../selectors/automationControls/passengerCreationFrequency";
import { applicationIsPassengerCreationAutomatedSelector } from "../../selectors/automationControls/isPassengerCreationAutomated";

export function* applicationAutoAddPassengersWorker(
  action: ReturnType<
    typeof applicationChangePassengerCreationAutomatedValueAction
  >
): SagaIterator {
  let isAutomated = action.payload.isAutomated;
  const floorsCount = yield select(applicationFloorsCountSelector);

  while (isAutomated) {
    // frequency can change while the loop is running thus we need to get it every iteration
    const frequency = yield select(
      applicationPassengerCreationFrequencySelector
    );
    yield delay(frequency * 1000);

    const id = uuidv4();
    const [initialFloor, targetFloor] = generateRandomFloors(floorsCount - 1);
    yield put(applicationAddPassengerAction({ id, initialFloor, targetFloor }));

    isAutomated = yield select(applicationIsPassengerCreationAutomatedSelector);
  }
}
