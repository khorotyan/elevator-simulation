import type { ISagaModule } from "redux-dynamic-modules-saga";
import type { IState } from "../../helpers/store/state";
import { applicationRootReducer } from "./reducers/root";
import { applicationRootSaga } from "./sagas/root";

export function getApplicationModule(): ISagaModule<
  Pick<IState, "application">
> {
  return {
    id: "application",
    reducerMap: {
      application: applicationRootReducer,
    },
    sagas: [applicationRootSaga],
  };
}
