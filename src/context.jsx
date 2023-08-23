import React, { createContext, useContext, useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detail);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // get Products and Cart from LocalStorage
  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem("products"));
    localProducts ? setProducts(localProducts) : initializeProductsState();

    const localCart = JSON.parse(localStorage.getItem("cart"));
    localCart ? setCart(localCart) : setCart([]);
    console.log(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // set Products and Cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [products, cart]);

  // making a copy from storeProducts because when we initiate a state with a reference values like arrays or objects(even objects thats belong to an array) it cause to changing the storeProducts when we change products state
  function initializeProductsState() {
    const initialProducts = storeProducts.reduce((total, product) => {
      const singleItem = { ...product };
      return (total = [...total, singleItem]);
    }, []);
    // -- you can use forEach method instead of reduce method
    // let tempProducts = [];
    // storeProducts.forEach((product) => {
    //   const singleItem = { ...product };
    //   tempProducts = [...tempProducts, singleItem];
    // });
    setProducts(initialProducts);
  }

  useEffect(() => {
    addTotals();
  }, [cart]);
  function addTotals() {
    const tempSubTotal = cart.reduce((total, product) => {
      return (total += product.total);
    }, 0);
    const subTotal = parseFloat(tempSubTotal.toFixed(2));
    const tempTax = 0.09 * subTotal;
    //tiFixed method return a string so we use parseFloat
    const tax = parseFloat(tempTax.toFixed(2));
    const tempCartTotal = subTotal + tax;
    const cartTotal = parseFloat(tempCartTotal.toFixed(2));
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(cartTotal);
  }

  function addToCart(id) {
    const newProducts = products.map((product) => {
      if (product.id == id) {
        product.inCart = true;
        product.count = 1;
        product.total = product.price * product.count;
        setCart([...cart, product]);
      }
      return product;
    });
    setProducts(newProducts);
  }

  function handleDetail(id) {
    const detailProduct = products.find((product) => product.id == id);
    setDetail(detailProduct);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const openModal = (id) => {
    setModalOpen(true);
    const modalProduct = products.find((product) => product.id == id);
    setModalProduct(modalProduct);
  };

  function increment(id) {
    const newCart = cart.map((product) => {
      if (product.id == id) {
        product.count += 1;
        product.total = product.price * product.count;
      }
      return product;
    });
    setCart(newCart);
  }

  function decrement(id) {
    const newCart = cart.map((product) => {
      if (product.id == id) {
        product.count -= 1;
        product.total = product.price * product.count;
      }
      return product;
    });
    setCart(newCart);
  }

  function removeItem(id) {
    const newProducts = products.map((product) => {
      if (product.id == id) {
        product.count = 0;
        product.inCart = false;
      }
      return product;
    });
    setProducts(newProducts);
    const newCart = cart.filter((product) => {
      return product.id !== id;
    });
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
    initializeProductsState();
  }

  return (
    <AppContext.Provider
      value={{
        products,
        detail,
        modalOpen,
        modalProduct,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
