import React from "react";
import { useGlobalContext } from "../context";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Modal = () => {
  const { modalOpen, modalProduct, closeModal } = useGlobalContext();
  const { img, price, title } = modalProduct;
  if (!modalOpen) {
    return null;
  }
  return (
    <ModalContainer>
      <div className="container-fluid container-danger" onClick={closeModal}>
        <div className="row">
          <div
            id="modal"
            className="col-8 col-md-6 col-lg-4 mx-auto p-5 text-center text-capitalize"
            onClick={console.log("object")}
          >
            <h5>Item Added To The Cart</h5>
            <img src={img} alt="Product" className="img-fluid" />
            <h5>{title}</h5>
            <h5 className="text-muted">price : $ {price}</h5>
            <Link to="/">
              <ButtonContainer onClick={closeModal}>
                Continue Shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer onClick={closeModal} cart="cart">
                Go To Cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
export default Modal;
