import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Router } from "react-router";
import { UserProvider } from "./context/UserProvider.jsx";
import { CaptainProvider } from "./context/CaptainProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CaptainProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CaptainProvider>
    </BrowserRouter>
  </StrictMode>,
);
