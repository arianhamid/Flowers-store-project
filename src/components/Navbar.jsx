import React from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={image} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
