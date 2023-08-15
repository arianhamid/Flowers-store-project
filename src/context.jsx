import React, { createContext, useContext, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(storeProducts);
  const [detail, setDetail] = useState(detailProduct);

  function addToCart() {
    console.log("hello from add to cart");
  }
  function handleDetail() {
    console.log("hello from detail");
  }

  return (
    <AppContext.Provider
      value={{ products, detail, handleDetail, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
