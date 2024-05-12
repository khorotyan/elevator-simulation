import { SagaIterator } from "redux-saga";
import { applicationAddPassengerWatcher } from "./addPassenger/watcher";
import { fork } from "redux-saga/effects";

export function* applicationRootSaga(): SagaIterator {
  yield fork(applicationAddPassengerWatcher);
}
