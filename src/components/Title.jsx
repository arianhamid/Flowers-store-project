import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-4 text-center text-title">
        <h1 className="text-capitalize">
          {name} <strong className="text-purple">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
