import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/estadisticas.css";
import iconMessage from "../icons/Property 1=message-circle.svg";
import iconClock from "../icons/Property 1=clock.svg";

const Estadisticas = () => {
  const [user, setUser] = useState();

  const traerUser = () => {
    const usuarioDatos = JSON.parse(localStorage.getItem("user"));
    setUser(usuarioDatos);
  };

  useEffect(() => {
    traerUser();
  }, []);

  return (
    <div className="container-estadisticas">
      <header>
        <h2>Estadísticas</h2>
        <div className="container-filtros">
          <select defaultValue={0} className="filtro">
            <option value={0}>Los Ultimos 7 días</option>
            <option value={1}>Los Ultimos 15 días</option>
          </select>
        </div>
      </header>
      <div className="body-estadisticas">
        <div className="container-time estadis">
          <div className="text">
            <img src={iconClock} alt="tiempo: " />
            <p>Tiempo estudio(Horas): </p>
          </div>
          <span>{0}</span>
        </div>
        <div className="container-contestadas estadis">
          <div className="text">
            <img src={iconMessage} alt="contestadas: " />
            <p>Respuestas contestadas: </p>
          </div>
          <span>
            {user
              ? user.estadisticas[0].contestadas +
                user.estadisticas[1].contestadas +
                user.estadisticas[2].contestadas +
                user.estadisticas[3].contestadas +
                user.estadisticas[4].contestadas
              : 0}
          </span>
        </div>
        <div className="container-correctas estadis">
          <div className="text">
            <img src={iconMessage} alt="correctas: " />
            <p>Respuestas correctas: </p>
          </div>
          <span>
            {user
              ? user.estadisticas[0].correctas +
                user.estadisticas[1].correctas +
                user.estadisticas[2].correctas +
                user.estadisticas[3].correctas +
                user.estadisticas[4].correctas
              : 0}
          </span>
        </div>
        <div className="container-incorrectas estadis">
          <div className="text">
            <img src={iconMessage} alt="Incorrectas: " />
            <p>Respuestas Incorrectas: </p>
          </div>
          <span>
            {user
              ? user.estadisticas[0].incorrectas +
                user.estadisticas[1].incorrectas +
                user.estadisticas[2].incorrectas +
                user.estadisticas[3].incorrectas +
                user.estadisticas[4].incorrectas
              : 0}
          </span>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Estadisticas;
