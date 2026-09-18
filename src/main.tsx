import { ThemeProvider } from "@contexts/ThemeProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { initFocusOnHashChange } from "./utils/focusOnHashChange.ts";
import "./index.css";

initFocusOnHashChange();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
