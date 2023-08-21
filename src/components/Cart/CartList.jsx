import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../context";

const CartList = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CartList;
