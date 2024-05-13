import type { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { applicationAutoAddPassengersWorker } from "./worker";
import { applicationChangePassengerCreationAutomatedValueAction } from "../../actions/automationControls/changePassengerCreationAutomatedValue";

export function* applicationAutoAddPassengersWatcher(): SagaIterator {
  yield takeLatest(
    getType(applicationChangePassengerCreationAutomatedValueAction),
    applicationAutoAddPassengersWorker
  );
}
