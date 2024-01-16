import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InputsProvider } from "./providers/searchInput/Inputs.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputsProvider>
      <App />
    </InputsProvider>
  </React.StrictMode>
);
