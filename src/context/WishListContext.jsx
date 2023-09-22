import React, { createContext, useContext, useState } from "react";

export const WishListContext = createContext();
export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [error, setError] = useState("");
  const [removeMessage, setRemoveMessage] = useState("");

  function AddToWishlist(item) {
    // If Item Already Present In WishList
    if (wishList.includes(item)) {
      setError(`${item.name} Is Already Present In Wish List!`);
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      // set the new item and remove the error message
      setWishList([...wishList, item]);
      setError(`${item.name} Added To Wish List`);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  }
  function RemoveFromWishlist(id) {
    const filteredArray = wishList.filter((item) => item.id !== id);
    setWishList([...filteredArray]);
    setRemoveMessage("Item Removed From Wish List");
    setTimeout(() => {
      setRemoveMessage("");
    }, 1000);
  }
  return (
    <WishListContext.Provider
      value={{
        wishList,
        AddToWishlist,
        RemoveFromWishlist,
        error,
        removeMessage,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
