import React from "react";
import logoApp from "../images/Color=white, Container=No.png";
import { Link } from 'react-router-dom'
import "../styles/into.css";

const Into = () => {
  return (
    <div className="container-into">
      <img alt="logo_app" src={logoApp} />
      <Link to="/login">
        <button className="button-into">Entrar a la App</button>
      </Link>
    </div>
  );
};

export default Into;
