import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext, ProductProvider } from "./context/ProductContext.jsx";
import { CartContext, CartProvider } from "./context/CartContext.jsx";
import {
  WishListContext,
  WishListProvider,
} from "./context/WishListContext.jsx";
// so that it is available everywhere
export { ProductContext, CartContext, WishListContext };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
