import { IModule, IModuleStore, createStore } from "redux-dynamic-modules";

import type { IState } from "./state";
import { enableMapSet } from "immer";
import { getSagaExtension } from "redux-dynamic-modules-saga";

enableMapSet();

interface ConfigureStoreOptions {
  initialState?: IState;
  sagaContext: Record<string, unknown>;
  modules: IModule<Partial<IState>>[];
}

interface Output {
  store: IModuleStore<IState>;
}

export function configureStore({
  initialState = {},
  sagaContext = {},
  modules = [],
}: ConfigureStoreOptions): Output {
  let advancedComposeEnhancers;
  const sagaExtension = getSagaExtension(sagaContext);

  const store = createStore<IState>(
    {
      initialState,
      enhancers: [],
      extensions: [sagaExtension],
      advancedComposeEnhancers,
    },
    ...modules
  );

  return { store };
}
