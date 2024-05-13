import type { SagaIterator } from "redux-saga";
import { delay, put, select } from "redux-saga/effects";
import { applicationChangeAppStateAutomatedValueAction } from "../../actions/automationControls/changeAppStateAutomatedValue";
import { applicationProcessTimeUnitAction } from "../../actions/processTimeUnit";
import { applicationStateChangeFrequencySelector } from "../../selectors/automationControls/stateChangeFrequency";
import { applicationIsAppStateAutomatedSelector } from "../../selectors/automationControls/isAppStateAutomated";

export function* applicationAutoProcessTimeWorker(
  action: ReturnType<typeof applicationChangeAppStateAutomatedValueAction>
): SagaIterator {
  let isAutomated = action.payload.isAutomated;

  while (isAutomated) {
    // frequency can change while the loop is running thus we need to get it every iteration
    const frequency = yield select(applicationStateChangeFrequencySelector);
    yield delay(frequency * 1000);

    yield put(applicationProcessTimeUnitAction());

    isAutomated = yield select(applicationIsAppStateAutomatedSelector);
  }
}
