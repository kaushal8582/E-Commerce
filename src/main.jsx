import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./Store/CartProvider.jsx";
import { AuthProvider } from "./Store/Auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
