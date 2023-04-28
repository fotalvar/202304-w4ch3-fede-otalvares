import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PhoneContextProvider from "./store/context/PhoneContext/PhoneContextProvider";

ReactDOM.createRoot(document.getElementById("container") as HTMLElement).render(
  <React.StrictMode>
    <PhoneContextProvider></PhoneContextProvider>
  </React.StrictMode>
);
