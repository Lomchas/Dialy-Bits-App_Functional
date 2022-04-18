import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Url } from "../helpers/Url";
import { useForm } from "../hooks/useForm";
import logoApp from "../images/Color=Purple, Container=Yes.png";
import "../styles/login.css";

const Login = () => {
  const [formValue, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValue;
  const [usuarioEnter, setUsuarioEnter] = useState([]);

  const fetchAPI = useCallback(() => {
    fetch(Url)
      .then((resp) => resp.json())
      .then((data) =>
        data === ""
          ? console.log("Cargando...")
          : data.filter((usuario) =>
              usuario.email === formValue.email &&
              usuario.password === formValue.password
                ? setUsuarioEnter(usuario)
                : ""
            )
      ).catch((err) => console.log(err))
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuarioEnter === undefined) {
      alert("Usuario o contraseña incorrectos");
    } else {
      alert(`Bienvenid@ ${usuarioEnter.nombre}`);
      localStorage.setItem("user", JSON.stringify(usuarioEnter));
      console.clear();
      window.location = "/home";
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [formValue]);

  return (
    <div className="container-login">
      <img alt="logoApp" width="100px" height="100px" src={logoApp} />
      <h2 className="title-login">Iniciar Sesion</h2>
      <hr />
      <div className="form-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label-login-email">
            Correo electronico
            <input
              type="email"
              placeholder="Ingrese su correo eletronico"
              id="email"
              className="inputEmail"
              autoComplete="no"
              onChange={handleInputChange}
              name="email"
              value={email}
            />
          </label>
          <br />
          <label htmlFor="password" className="label-login-password">
            Contraseña
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              id="password"
              className="inputPassword"
              autoComplete="no"
              onChange={handleInputChange}
              name="password"
              value={password}
            />
          </label>
          {/* <Link to={route === 1 ? "/home" : "/login"}> */}
          <button className="buttonLogin">Iniciar sesion</button>
          {/* </Link> */}
        </form>
      </div>
      <button className="aForgotPassword">¿Se te olvido tu contraseña?</button>
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
