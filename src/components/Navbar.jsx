import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>Hello From Navbar</div>
      <Outlet />
    </>
  );
};

export default Navbar;
