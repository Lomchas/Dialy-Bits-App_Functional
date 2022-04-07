import React from "react";
import { Link } from "react-router-dom";
import logoApp from "../images/Color=Purple, Container=Yes.png";
import "../styles/login.css";



const Login = () => {
  return (
    <div className="container-login">
      <img alt="logoApp" width="100px" height="100px" src={logoApp} />
      <h2 className="title-login">Iniciar Sesion</h2>
      <hr />
      <div className="form-container">
        <form className="form-login">
          <label htmlFor="email" className="label-login-email">
            Correo electronico
            <input
              type="email"
              placeholder="Ingrese su correo eletronico"
              id="email"
              className="inputEmail"
              autoComplete="no"
            />
          </label>
          <br/>
          <label htmlFor="password" className="label-login-password">
          Contraseña
          <input
              type="password"
              placeholder="Ingrese su contraseña"
              id="password"
              className="inputPassword"
              autoComplete="no"
            />
          </label>
          <button className="buttonLogin">Iniciar session</button>
        </form>
      </div>
      <a href="#" className="aForgotPassword">
        ¿Se te olvido tu contraseña?
      </a>
      <p className="pInscribirse">
        ¿Aun no tienes una cuenta?{" "}
        <Link to="/signUp" className="LinkInscribirse">
          Inscribirse
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
