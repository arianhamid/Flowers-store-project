import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useGlobalContext();
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 mt-2 ms-5 ms-md-auto text-capitalize text-end">
          <Link to="/">
            <div
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={clearCart}
            >
              clear cart
            </div>
          </Link>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>{cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax :</span>
            <strong>{cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total :</span>
            <strong>{cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
