import React, { createContext, useContext, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(storeProducts);
  const [detail, setDetail] = useState(detailProduct);

  function addToCart(id) {
    const newProduct = products.map((product) => {
      if (product.id == id) {
        product.inCart = !product.inCart;
      }
      return product;
    });
    setProducts(newProduct);
  }

  function handleDetail(id) {
    const detailProduct = products.find((product) => product.id == id);
    setDetail(detailProduct);
  }

  return (
    <AppContext.Provider value={{ products, detail, handleDetail, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
