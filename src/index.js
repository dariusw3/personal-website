import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorThemeContextProvider } from "./context/ColorTheme.context";

ReactDOM.render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
