import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Product = ({ id, title, img, price, inCart }) => {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-xl-3 my-3">
      <div className="card">
        <div
          className="image-container p-5"
          onClick={() => console.log("clicked from image container")}
        >
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button className="cart-btn" disabled={inCart ? true : false}>
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                in Cart
              </p>
            ) : (
              <i class="fas fa-cart-plus"></i>
            )}
          </button>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="me-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
};
const ProductWrapper = styled.div``;
export default Product;
