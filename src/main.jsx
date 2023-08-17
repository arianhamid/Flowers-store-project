import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context.jsx";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <AppProvider>
      <App />
    </AppProvider>
  </StyleSheetManager>
  // </React.StrictMode>
);
