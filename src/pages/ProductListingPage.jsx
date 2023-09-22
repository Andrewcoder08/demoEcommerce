import React, { useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/data";
import { Link } from "react-router-dom";
import { CartContext, ProductContext, WishListContext } from "../main";

export function ProductListingPage() {
  //
  const { productsArray } = useContext(ProductContext);
  const { AddToCartHandler, success } = useContext(CartContext);
  const { error, AddToWishlist } = useContext(WishListContext);

  return (
    <div>
      <h1>Product Listing Page</h1>
      <nav>
        <Link to="/cart">My Cart</Link>
        <br />
        <Link to="/wishList">My WishList</Link>
      </nav>
      <div>
        {/* when data is loading from api */}
        <h1>{productsArray.loading && "Product Data Loading....."}</h1>
        {/* this is for error message */}
        <div style={{ display: error !== "" ? "block" : "none" }}>
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "20px",
              letterSpacing: "0.02em",
            }}
          >
            {error}
          </p>
        </div>
        {/* this div is for success message */}
        <div>
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "20px",
              letterSpacing: "0.02em",
            }}
          >
            {success}
          </p>
        </div>
        {/* div responsible for showing products on page */}
        <div
          style={{
            textAlign: "left",
          }}
        >
          {productsArray.productData.map((item, index) => {
            // deconstruct
            const { id, name, description, price } = item;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #713abe",
                  borderRadius: "0.5rem",
                  boxShadow: "2px 10px 15px 1px rgba(0, 0, 0, 0.2)",
                  fontWeight: "500",
                  padding: "1rem",
                  margin: "1rem",
                }}
              >
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: INR{price}</p>
                {/* creating a dynamic route for the product detail */}
                <Link className="viewItem" to={`/productDetails/${id}`}>
                  Visit Item
                </Link>
                <div>
                  <button onClick={() => AddToCartHandler(item)}>
                    Add To Cart
                  </button>
                  <button onClick={() => AddToWishlist(item)}>
                    Add To Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
