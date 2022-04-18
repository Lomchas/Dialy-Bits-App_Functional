import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/home.css";
import imgHtml from "../images/Ellipse 9.png";
import imgCss from "../images/Ellipse 9 (1).png";
import imgJs from "../images/Ellipse 9 (2).png";
import imgFigma from "../images/Ellipse 9 (3).png";
import imgUx from "../images/Ellipse 9 (4).png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();


  const enviarCategoriaPregunta = ({ target }) => {
    let categoria = target.name;
    if (
      categoria === "HTML" ||
      categoria === "CSS" ||
      categoria === "JS" ||
      categoria === "FIGMA" ||
      categoria === "UX"
    ) {
      localStorage.setItem("categoria", categoria);
    }
  };

  const traeUser = () => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    setUser(usuario);
  };

  useEffect(() => {
    traeUser();
  }, []);

  return (
      <div className="container-home">
        <div className="text-home">
          <p className="text">
            Practica tus conocimientos en la categoria que prefieras
          </p>
        </div>
        <div className="container-categorias">
          <div className="session1">
            <CircularProgressbarWithChildren
              className="progressBar"
              value={user ? user.estadisticas[0].correctas : 100}
              strokeWidth={11}
              styles={buildStyles({
                pathColor: "#2CB67D",
                trailColor: "#DDDDDD",
              })}
            >
              <Link to="/pregunton" onClick={enviarCategoriaPregunta}>
                <img
                  style={{ width: 75, marginTop: 62 }}
                  src={imgHtml}
                  alt="hmtl"
                  name="HTML"
                />
              </Link>
              <p
                className="text-categ"
                style={{
                  color: "white",
                  marginTop: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                HTML
              </p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="session2">
            <CircularProgressbarWithChildren
              className="progressBar"
              value={user ? user.estadisticas[1].correctas : 100}
              strokeWidth={11}
              styles={buildStyles({
                pathColor: "#2CB67D",
                trailColor: "#DDDDDD",
              })}
            >
              <Link to="/pregunton" onClick={enviarCategoriaPregunta}>
                <img
                  style={{ width: 75, marginTop: 62 }}
                  src={imgCss}
                  alt="css"
                  className="perro"
                  name="CSS"
                />
              </Link>
              <p
                className="text-categ"
                style={{
                  color: "white",
                  marginTop: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                CSS
              </p>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren
              className="progressBar"
              value={user ? user.estadisticas[2].correctas : 100}
              strokeWidth={11}
              styles={buildStyles({
                pathColor: "#2CB67D",
                trailColor: "#DDDDDD",
              })}
            >
              <Link to="/pregunton" onClick={enviarCategoriaPregunta}>
                <img
                  style={{ width: 67, marginTop: 62 }}
                  src={imgJs}
                  alt="js"
                  className="perro"
                  name="JS"
                />
              </Link>
              <p
                className="text-categ"
                style={{
                  color: "white",
                  marginTop: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                JS
              </p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="session3">
            <CircularProgressbarWithChildren
              className="progressBar"
              value={user ? user.estadisticas[3].correctas : 100}
              strokeWidth={11}
              styles={buildStyles({
                pathColor: "#2CB67D",
                trailColor: "#DDDDDD",
              })}
            >
              <Link to="/pregunton" onClick={enviarCategoriaPregunta}>
                <img
                  style={{ width: 67, marginTop: 62 }}
                  src={imgFigma}
                  alt="figma"
                  className="perro"
                  name="FIGMA"
                />
              </Link>
              <p
                className="text-categ"
                style={{
                  color: "white",
                  marginTop: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                FIGMA
              </p>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren
              className="progressBar"
              value={user ? user.estadisticas[4].correctas : 100}
              strokeWidth={11}
              styles={buildStyles({
                pathColor: "#2CB67D",
                trailColor: "#DDDDDD",
              })}
            >
              <Link to="/pregunton" onClick={enviarCategoriaPregunta}>
                <img
                  style={{ width: 67, marginTop: 62 }}
                  src={imgUx}
                  alt="ux "
                  className="perro"
                  name="UX"
                />
              </Link>
              <p
                className="text-categ"
                style={{
                  color: "white",
                  marginTop: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                UX
              </p>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <NavBar />
      </div>
  );
};

export default Home;
