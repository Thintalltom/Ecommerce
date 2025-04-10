import "./index.css";
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { CartProvider } from "./Context/CartContext";
render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
