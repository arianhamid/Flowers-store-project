import React from "react";
import { useGlobalContext } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Details = () => {
  const { detail, addToCart, openModal, closeModal } = useGlobalContext();
  const { id, company, img, info, title, price, inCart } = detail;

  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* title ends */}
      {/* Product Info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img src={img} alt="product" className="img-fluid" />
        </div>
        {/* Product Text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h4 className="text-title mt-3 mb-2 text-muted text-uppercase">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize fw-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{info}</p>
          {/* Buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart="cart"
              onClick={() => {
                addToCart(id), openModal(id);
              }}
              disabled={inCart ? true : false}
            >
              {inCart ? "incart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
