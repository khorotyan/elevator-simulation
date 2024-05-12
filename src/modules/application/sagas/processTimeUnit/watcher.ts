import type { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { applicationProcessTimeUnitWorker } from "./worker";
import { applicationProcessTimeUnitAction } from "../../actions/processTimeUnit";

export function* applicationProcessTimeUnitWatcher(): SagaIterator {
  yield takeLatest(
    getType(applicationProcessTimeUnitAction),
    applicationProcessTimeUnitWorker
  );
}
