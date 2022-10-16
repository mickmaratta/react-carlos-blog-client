import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>
);
