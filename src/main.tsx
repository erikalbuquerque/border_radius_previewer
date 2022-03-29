import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BorderRadiusProvider } from "./context/BorderRadiusContext";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BorderRadiusProvider>
      <App />
    </BorderRadiusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
