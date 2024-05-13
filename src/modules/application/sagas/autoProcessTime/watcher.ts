import type { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { applicationAutoProcessTimeWorker } from "./worker";
import { applicationChangeAppStateAutomatedValueAction } from "../../actions/automationControls/changeAppStateAutomatedValue";

export function* applicationAutoProcessTimeWatcher(): SagaIterator {
  yield takeLatest(
    getType(applicationChangeAppStateAutomatedValueAction),
    applicationAutoProcessTimeWorker
  );
}
