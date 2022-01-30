import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./globalStateProvider";
import { initState, reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initState={initState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
