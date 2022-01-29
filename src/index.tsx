import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./rematch-store";
import storeRTK from "./rtk-store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRTK}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
