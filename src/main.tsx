import CookiesProvider from "@contexts/CookiesContext.tsx";
import { ThemeProvider } from "@contexts/ThemeProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CookiesProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </CookiesProvider>
    </ThemeProvider>
  </StrictMode>,
);
