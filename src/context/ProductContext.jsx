import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { fakeFetch } from "../api/data";

// create Product Context, so that the state is accessible in other components
export const ProductContext = createContext();
export function ProductProvider({ children }) {
  // state Variable for product
  const [productsArray, setProducts] = useState({
    loading: true,
    productData: [],
  });

  // apiCall to set data in our stateVariable
  const apiCall = async () => {
    try {
      const resp = await fakeFetch("https://example.com/api/products");
      if (resp.status === 200) {
        setProducts((prod) => ({
          ...prod,
          loading: false,
          productData: resp.data.products,
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  //   call using useEffect
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <ProductContext.Provider value={{ productsArray }}>
      {children}
    </ProductContext.Provider>
  );
}
