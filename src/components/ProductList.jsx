import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useGlobalContext } from "../context";

const ProductList = () => {
  const { state } = useGlobalContext();
  console.log(state);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
        </div>
      </div>
    </>
  );
};

export default ProductList;
