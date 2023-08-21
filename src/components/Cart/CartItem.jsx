import React from "react";
import { useGlobalContext } from "../../context";

const CartItem = ({ title, img, price, id, count, total }) => {
  const { increment, decrement, removeItem } = useGlobalContext();
  return (
    <div className="container-fluid">
      <div className="row text-capitalize text-center">
        <div className="col-10 col-lg-2 my-2 mx-auto my-auto">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            alt="product"
            className="img-fluid"
          />
        </div>
        <div className="col-10 col-lg-2 my-2 mx-auto my-auto">
          <span className="d-lg-none">product :</span>
          {title}
        </div>
        <div className="col-10 col-lg-2 my-2 mx-auto my-auto">
          <span className="d-lg-none">price : $</span>
          {price}
        </div>
        <div className="col-10 col-lg-2 my-2 mx-auto my-auto">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className={`btn btn-black mx-1 ${
                  count > 0 ? null : "disabled"
                }`}
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1 disabled">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-9 col-lg-2 my-2 mx-auto my-auto">
          <div className="cart-icon">
            <i className="fa fa-trash" onClick={() => removeItem(id)} />
          </div>
        </div>
        <div className="col-10 col-lg-2 my-2 mx-auto my-auto">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
