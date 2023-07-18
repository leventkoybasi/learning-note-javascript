import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppWithState from "./AppWithState";
//ReactDOM.createRoot(document.getElementById("root")). yerine
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppWithState />
  </React.StrictMode>
);
