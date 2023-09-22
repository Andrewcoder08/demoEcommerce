import React from "react";
import { useContext } from "react";
import { CartContext } from "../main";
export function Cart() {
  const { cartItems, RemoveFromCartHandler, removeMessage } =
    useContext(CartContext);

  return (
    <div>
      <h1>Inside Cart Page</h1>
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
      {cartItems.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid #713abe",
              borderRadius: "0.5rem",
              boxShadow: "2px 10px 15px 1px rgba(0, 0, 0, 0.2)",
              fontWeight: "500",
              padding: "1rem",
            }}
          >
            <h2>My Cart</h2>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>
              Total Quantity: <strong>{item.addedQuantity}</strong>
            </p>
            <p>Category: {item.category}</p>
            <p>Brand: {item.brand}</p>
            <button onClick={() => RemoveFromCartHandler(item.id)}>
              Remove From Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
