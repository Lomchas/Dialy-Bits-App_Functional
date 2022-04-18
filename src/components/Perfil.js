import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import porfile_picture from "../images/porfile.png";
import "../styles/perfil.css";

const Perfil = () => {
  const [user, setUser] = useState();

  const traerUser = () => {
    const usuarioDatos = JSON.parse(localStorage.getItem("user"));
    setUser(usuarioDatos);
  };

  const logOut = (e) => {
    if (e.target.classList.contains("btn-logout")) {
      localStorage.removeItem('user')
       console.log('Cerraste sesion')
    } 
   
    
  };

  console.log(user);
  useEffect(() => {
    traerUser();
  }, []);

  return (
    <div className="container-perfil">
      <h2>Perfil</h2>
      <div className="datos-perfil">
        <div className="foto-container">
          <img src={user ? user.image : porfile_picture} alt="foto Perfl" />
        </div>
        <p className="Nombre-perfil">
          {user ? user.nombre : `Usuario ${user ? user.id : "0"}`}
        </p>
        <p className="correo-perfil">{user ? user.email : "no hay"}</p>
      </div>
      <div className="container-logout">
        <Link to='/login' onClick={logOut}>
        <button className="btn-logout" type="button">
          Cerrar sesion
        </button>
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Perfil;
