import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import ReduxWrapper from "./components/ReduxWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxWrapper>
      <App />
    </ReduxWrapper>
  </React.StrictMode>
);
