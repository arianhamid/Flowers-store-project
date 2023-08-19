import React from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
const Navbar = () => {
  return (
    <>
      <NavWrapper className="navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img
            src={image}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <i className="fa fa-cart-plus" aria-hidden="true" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
      <Outlet />
    </>
  );
};

// styled nav component
const NavWrapper = styled.nav`
background: var(--mainBlue) !important;
.nav-link{
color: var(--mainWhite) !important;
font-size: 1.3rem;
text-transform: capitalize;
`;

export default Navbar;
