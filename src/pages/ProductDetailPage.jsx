import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../main";
import { useNavigate } from "react-router-dom";
export function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  // we need productsArray here because we will traverse over this to find the matching product with help of ID
  const { productsArray } = useContext(ProductContext);
  // finding the productId received
  const productSelected = productsArray.productData.find(
    ({ id }) => id === Number(productId)
  );

  // returning the UI of Product found
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          border: "1px solid black",
          padding: ".5rem",
        }}
      >
        <h2>About The Product</h2>
        <p>Name: {productSelected.name}</p>
        <p>Description: {productSelected.description}</p>
        <p>Quantity: {productSelected.quantity}</p>
        <p>Category: {productSelected.category}</p>
        <p>Brand: {productSelected.brand}</p>
        {/* this button ensures that we go back to the product listing page after we have seen the details of the product */}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
