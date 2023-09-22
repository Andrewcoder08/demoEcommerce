import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProductListingPage } from "./pages/ProductListingPage";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Error404 } from "./pages/Error404";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartContext, WishListContext } from "./main";

export default function App() {
  const { cartItems } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);
  return (
    <div>
      <div
        style={{
          textTransform: "uppercase",
          fontSize: "3rem",
          fontWeight: "bold",
          padding: "1rem",
          width: "100%",
          background: "#9D76C1",
          margin: "0",
          border: "2px solid black",
          borderRadius: ".5rem",
        }}
      >
        E-Commerce Website
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productListingPage">Product Listing Page</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/wishList">Wish List ({wishList.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/productListingPage"
          element={<ProductListingPage />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        {/* dynamic route */}
        <Route
          path="/productDetails/:productId"
          element={<ProductDetailPage />}
        ></Route>
        {/* this is how you route to error 404 page */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}
