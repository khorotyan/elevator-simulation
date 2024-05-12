import type { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { applicationAddPassengerWorker } from "./worker";
import { applicationAddPassengerAction } from "../../actions/addPassenger";

export function* applicationAddPassengerWatcher(): SagaIterator {
  yield takeLatest(
    getType(applicationAddPassengerAction),
    applicationAddPassengerWorker
  );
}
