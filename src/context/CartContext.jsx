import React, { createContext, useState } from "react";
// Cart Context is for access of cart contents
// a useState for cart
// we will have an addToCartHandler
// remove from cart handler
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [success, setSuccess] = useState("");
  const [removeMessage, setRemoveMessage] = useState("");

  // function for AddToCart
  const AddToCartHandler = (item) => {
    // find index of item
    setRemoveMessage("");
    const itemPresent = cartItems.findIndex(
      (element) => element.id === item.id
    );
    // not present
    if (itemPresent === -1) {
      // add new key to item
      setCartItems([...cartItems, { ...item, addedQuantity: 1 }]);
      setSuccess(`${item.name}  Item Added Successfully to Cart!`);
      // remove message after 2 seconds
      setTimeout(() => {
        setSuccess("");
      }, 1000);
    }
    // if item already present
    else {
      setCartItems(
        cartItems.map((element) =>
          // means found item already present in cart, increase count
          element.id === item.id
            ? { ...element, addedQuantity: element.addedQuantity + 1 }
            : ""
        )
      );
      setSuccess(`${item.name}  Item Added Successfully to Cart again!`);
      // remove message after 2 seconds
      setTimeout(() => {
        setSuccess("");
      }, 1000);
    }
  };

  // function to removeFromCart

  const RemoveFromCartHandler = (id) => {
    const filteredArray = cartItems.filter((itemObj) => itemObj.id != id);
    setCartItems([...filteredArray]);
    setRemoveMessage("Item Removed From Cart!");
    setTimeout(() => {
      setRemoveMessage("");
    }, 2000);
  };
  return (
    <CartContext.Provider
      value={{
        AddToCartHandler,
        RemoveFromCartHandler,
        cartItems,
        success,
        removeMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
