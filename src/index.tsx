import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import ReduxWrapper from "./components/ReduxWrapper";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxWrapper>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </ReduxWrapper>
  </React.StrictMode>
);
