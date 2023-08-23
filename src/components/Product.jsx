import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useGlobalContext } from "../context";

const Product = ({ id, title, img, price, inCart }) => {
  const { handleDetail, addToCart, openModal, closeModal } = useGlobalContext();
  return (
    <ProductWrapper className="col-9 col-md-6 col-xl-3 mx-auto my-3">
      <div className="card">
        <div className="image-container p-5" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            onClick={() => {
              addToCart(id), openModal(id);
            }}
            className="cart-btn"
            disabled={inCart ? true : false}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                in Cart
              </p>
            ) : (
              <i className="fas fa-cart-plus"></i>
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-purple font-italic mb-0">
            <span className="me-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};
Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.bool,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .image-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .image-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--lightPurple);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s ease-in-out;
  }
  .image-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
export default Product;
