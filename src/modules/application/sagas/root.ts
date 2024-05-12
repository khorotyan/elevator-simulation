import { SagaIterator } from "redux-saga";
import { applicationAddPassengerWatcher } from "./addPassenger/watcher";
import { fork } from "redux-saga/effects";
import { applicationProcessTimeUnitWatcher } from "./processTimeUnit/watcher";

export function* applicationRootSaga(): SagaIterator {
  yield fork(applicationAddPassengerWatcher);
  yield fork(applicationProcessTimeUnitWatcher);
}
