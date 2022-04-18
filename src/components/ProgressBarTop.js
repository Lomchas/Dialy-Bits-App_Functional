import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const ProgressBarTop = (props) => {
  return (
    <div className="contenedor-ProgressBar">
      <ProgressBar animated striped variant="success" now={props.porcentage} />
    </div>
  );
};

export default ProgressBarTop;
