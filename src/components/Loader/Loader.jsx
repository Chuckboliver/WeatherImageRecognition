import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
