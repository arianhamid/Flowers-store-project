import React from "react";
import { useLocation } from "react-router-dom";

const Default = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-uppercase text-title pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">{location.pathname}</span> was not
            found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
