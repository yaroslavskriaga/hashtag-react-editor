import React from "react";
import ReactDOM from "react-dom/client";
import "typeface-source-sans-pro";
import "shared/styles/index.scss";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
