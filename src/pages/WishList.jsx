import React, { useContext } from "react";
import { CartContext, WishListContext } from "../main";
export function WishList() {
  const { wishList, RemoveFromWishlist, removeMessage } =
    useContext(WishListContext);
  const { AddToCartHandler, success } = useContext(CartContext);

  return (
    <div>
      <h1>Inside Wish List Page</h1>
      <p
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
          letterSpacing: "0.02em",
        }}
      >
        {removeMessage}
      </p>
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
      <h3>
        Total Items In Your Wish List:{" "}
        <span style={{ fontSize: "30px" }}>{wishList.length}</span>
      </h3>
      <div>
        {wishList.map((item, index) => {
          return (
            <div key={index} className="wishListStyle">
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Category: {item.category}</p>
              <p>Brand: {item.brand}</p>
              <button onClick={() => RemoveFromWishlist(item.id)}>
                Remove From Wishlist
              </button>
              {/* when you move to cart you also remove it from wishlist */}
              <button
                onClick={() => {
                  AddToCartHandler(item);
                  RemoveFromWishlist(item.id);
                }}
              >
                Move To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
