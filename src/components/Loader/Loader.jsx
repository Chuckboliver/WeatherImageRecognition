import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
