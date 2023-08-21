import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { useGlobalContext } from "../../context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList />
          <CartTotals />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
