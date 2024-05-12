import { Provider } from "react-redux";
import React from "react";
import { configureStore } from "../utils/store";
import { getApplicationModule } from "../modules/application/module";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ReduxWrapper = ({ children }: Props) => {
  // use modular approach in case we want to add more modules in the future
  const { store } = configureStore({
    sagaContext: {},
    modules: [getApplicationModule()],
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
