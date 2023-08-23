import React from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../favicon.ico";

const Navbar = () => {
  return (
    <>
      <NavWrapper className="navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5">
        {/*Icon Attribution https://stockio.com/
        https://www.stockio.com/free-icon/gabriel-sunflower */}

        <Link to="/">
          <img src={logo} alt="flower store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="cart" className="ms-auto hvr-grow">
          <ButtonContainer cart="cart">
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
  // background: var(--mainBlue) !important;
  background-image: linear-gradient(
    to right,
    #7b319e,
    #772e97,
    #742b91,
    #70298a,
    #6c2684
  );
  .navbar-brand {
    max-height: 2.5rem;
    padding: 2px;
    cursor: pointer;
  }
  .navbar-brand:hover {
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .nav-link: hover {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
    transform: scale(1.1);
  }
`;
export default Navbar;
