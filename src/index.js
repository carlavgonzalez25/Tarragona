import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* i18n */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nInit from "./config/i18n";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nInit);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
