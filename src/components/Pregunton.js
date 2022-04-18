import React, { useEffect, useState } from "react";
import ProgressBarTop from "./ProgressBarTop";
import "../styles/Pregunton.css";
import SalirIcon from "../icons/Property 1=x.svg";
import HeartIcon from "../icons/Property 1=heart.svg";
import { Link } from "react-router-dom";
import niñoPregunton from "../images/Property 1=3.png";
import PreguntasHTML from "../Data/PreguntasHTML";
import { ModalCorrect, ModalIncorrect } from "./Modal";
import button1 from "../images/Buttons0.png";
import button2 from "../images/Buttons2.png";
import button3 from "../images/Buttons 3.png";
import button4 from "../images/Buttons 4.png";
import button5 from "../images/Buttons1}.png";
import card1 from "../images/Property 1=Angular.png";
import card2 from "../images/Property 1=Vue.js.png";
import card3 from "../images/Property 1=Windows.png";
import card4 from "../images/Property 1=Kotlin.png";

const Pregunton = () => {
  const [preguntas, setPreguntas] = useState({
    categoria: "",
    preguntas: {
      pregunta: "",
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      correcta: "",
    },
    totalCorrectas: 0,
    totalIncorrectas: 0,
    puntos: 0,
    vidas: 4,
  });

  const [categoriaQuestions, setCategoriaQuestions] = useState({
    categoria: "",
  });
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  let [cambiarQuestion, setCambiarQuestion] = useState(0);
  const [labels, setLabels] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });
  const [card, setCard] = useState({
    cards1: false,
    cards2: false,
    cards3: false,
    cards4: false,
  });

  const selectCard = (e) => {
    if (e.target.alt === preguntas.preguntas.a) {
      setCard({
        cards1: !card.cards1,
      });
    } else if (e.target.alt === preguntas.preguntas.b) {
      setCard({
        cards2: !card.cards2,
      });
    } else if (e.target.alt === preguntas.preguntas.c) {
      setCard({
        cards3: !card.cards3,
      });
    } else if (e.target.alt === preguntas.preguntas.d) {
      setCard({
        cards4: !card.cards4,
      });
    }
    console.log(card);
  };

  const handleChangeLabel = ({ target }) => {
    const cases = Number(target.name);
    console.log(cases);
    if (cases === 0) {
      setLabels({
        ...labels,
        button1: true,
      });
      target.style.display = "none";
    }
    if (cases === 1) {
      setLabels({
        ...labels,
        button2: true,
      });
      target.style.display = "none";
    }
    if (cases === 2) {
      setLabels({
        ...labels,
        button3: true,
      });
      target.style.display = "none";
    }
    if (cases === 3) {
      setLabels({
        ...labels,
        button4: true,
      });
      target.style.display = "none";
    }
    if (cases === 4) {
      setLabels({
        ...labels,
        button5: true,
      });
      target.style.display = "none";
    }
    localStorage.setItem('Eleccion', 'true')
  };


  const traerUser = () => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setDatosUserQuestions(localUser);
  };

  

  const handleVerifiar = (e) => {
    e.preventDefault();
    const localRespuesta = localStorage.getItem("Eleccion");
    if (localRespuesta === preguntas.preguntas.correcta) {
      setCorrect(true);
      setPreguntas({
        ...preguntas,
        totalCorrectas: preguntas.totalCorrectas + 1,
        puntos: preguntas.puntos + 1,
      });
    } else {
      setIncorrect(true);
      setPreguntas({
        ...preguntas,
        totalIncorrectas: preguntas.totalIncorrectas + 1,
        vidas: preguntas.vidas - 1,
      });
    }
    if (preguntas.vidas <= 0) {
      setPreguntas({
        ...preguntas,
        vidas: 0,
      });
      window.location = "/home";
    }
    if (cambiarQuestion === 4) {
      window.location = "/home";
    }
    handleRefreshAnswer("Eleccion");
    e.target.reset();
    setCambiarQuestion(
      cambiarQuestion >= 4 ? (cambiarQuestion = 4) : cambiarQuestion + 1
    );
  };


  const ActualizarEstado = () => {
    const local = localStorage.getItem("categoria");
    setCategoriaQuestions({
      categoria: 0,
    });
    if (categoriaQuestions.categoria? categoriaQuestions.categoria : local === "HTML") {
      setPreguntas({
        ...preguntas,
        categoria: "hmtl",
        preguntas: {
          pregunta: PreguntasHTML[cambiarQuestion].pregunta,
          a: PreguntasHTML[cambiarQuestion].a,
          b: PreguntasHTML[cambiarQuestion].b,
          c: PreguntasHTML[cambiarQuestion].c,
          d: PreguntasHTML[cambiarQuestion].d,
          e: PreguntasHTML[cambiarQuestion].e,
          correcta: PreguntasHTML[cambiarQuestion].correcta,
        },
      });
    }
  };

  const handleRespuesta = ({ target }) => {
    if (target.value) {
      localStorage.setItem("Eleccion", target.value);
    }
  };

  const handleRespuestaCards = ({ target }) => {
    if (target.alt) {
      localStorage.setItem("Eleccion", target.alt);
    }
  };

  const handleRefreshAnswer = (key) => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    traerUser();
    ActualizarEstado();
  }, [cambiarQuestion, labels]);

  return (
    <div className="container-pregunton">
      <div className="header-pregunton">
        <Link to="/home">
          <img src={SalirIcon} alt="Salir" />
        </Link>
        <ProgressBarTop porcentage={cambiarQuestion * 25} />
        <div className="container-life">
          <img src={HeartIcon} alt="vidas:" />
          <span className="counter-life">{preguntas.vidas}</span>
        </div>
      </div>
      <div className="container-pregunta">
        <img
          className={
            cambiarQuestion === 4 || cambiarQuestion === 3 ? "ocultar" : ""
          }
          src={niñoPregunton}
          width="100px"
          alt="Hi Kid!:"
        />
        <p className="pregunta-text">{preguntas.preguntas.pregunta}</p>
      </div>
      <div
        className={cambiarQuestion === 3 ? "organizador-respuestas" : "ocultar"}
      >
        <img
          className={labels.button1 === false ? "ocultar" : ""}
          src={button1}
          name={0}
          alt="resp1"
        />
        <img
          className={labels.button2 === false ? "ocultar" : ""}
          src={button3}
          name={2}
          alt="resp3"
        />
        <img
          className={labels.button3 === false ? "ocultar" : ""}
          src={button2}
          name={1}
          alt="resp2"
        />
        <img
          className={labels.button4 === false ? "ocultar" : ""}
          src={button5}
          name={4}
          alt="resp5"
        />
        <img
          className={labels.button5 === false ? "ocultar" : ""}
          src={button4}
          name={3}
          alt="resp4"
        />
      </div>
      <div className={"container-respuesta"}>
        <form className={"form-respuestas"} onSubmit={handleVerifiar}>
          <label
            htmlFor="pregunta1"
            className={
              cambiarQuestion === 3 || cambiarQuestion === 4
                ? "ocultar"
                : "labelsRespuestas"
            }
          >
            <p>{preguntas.preguntas.a}</p>
            <input
              onClick={handleRespuesta}
              type="radio"
              id="pregunta1"
              value={preguntas.preguntas.a}
              className="inputR"
              name="answer"
            />
          </label>
          <label
            htmlFor="pregunta2"
            className={
              cambiarQuestion === 3 || cambiarQuestion === 4
                ? "ocultar"
                : "labelsRespuestas"
            }
          >
            <p>{preguntas.preguntas.b}</p>
            <input
              onClick={handleRespuesta}
              type="radio"
              id="pregunta2"
              value={preguntas.preguntas.b}
              className="inputR"
              name="answer"
            />
          </label>
          <label
            htmlFor="pregunta3"
            className={
              cambiarQuestion === 3 || cambiarQuestion === 4
                ? "ocultar"
                : "labelsRespuestas"
            }
          >
            <p>{preguntas.preguntas.c}</p>
            <input
              onClick={handleRespuesta}
              type="radio"
              id="pregunta3"
              value={preguntas.preguntas.c}
              className="inputR"
              name="answer"
            />
          </label>
          <div
            className={
              cambiarQuestion === 3 ? "container-respuesta-labels" : "ocultar"
            }
          >
            <img
              src={button1}
              name={0}
              alt="resp1"
              onClick={handleChangeLabel}
            />
            <img
              src={button2}
              name={2}
              alt="resp2"
              onClick={handleChangeLabel}
            />
            <img
              src={button3}
              name={1}
              alt="resp3"
              onClick={handleChangeLabel}
            />
            <img
              src={button4}
              name={4}
              alt="resp4"
              onClick={handleChangeLabel}
            />
            <img
              src={button5}
              name={3}
              alt="resp5"
              onClick={handleChangeLabel}
            />
          </div>
          <div
            className={
              cambiarQuestion === 4 ? "contianer-respuestas-cards" : "ocultar"
            }
          >
            <div
              className={card.cards1 === true ? "verde" : "card"}
              onClick={selectCard}
            >
              <img
                src={card1}
                alt={preguntas.preguntas.a}
                onClick={handleRespuestaCards}
              />
              <p>{preguntas.preguntas.a}</p>
            </div>
            <div
              className={card.cards2 === true ? "verde" : "card"}
              onClick={selectCard}
            >
              <img
                src={card2}
                alt={preguntas.preguntas.b}
                onClick={handleRespuestaCards}
              />
              <p>{preguntas.preguntas.b}</p>
            </div>
            <div
              className={card.cards3 === true ? "verde" : "card"}
              onClick={selectCard}
            >
              <img
                src={card3}
                alt={preguntas.preguntas.c}
                onClick={handleRespuestaCards}
              />
              <p>{preguntas.preguntas.c}</p>
            </div>
            <div
              className={card.cards4 === true ? "verde" : "card"}
              onClick={selectCard}
            >
              <img
                src={card4}
                alt={preguntas.preguntas.d}
                onClick={handleRespuestaCards}
              />
              <p>{preguntas.preguntas.d}</p>
            </div>
          </div>
          <div className="btnComprobar-container">
            <button className="btnComprobar" type="submit">
              COMPROBAR
            </button>
            <ModalIncorrect
              estado={incorrect}
              setEstado={setIncorrect}
              preguntas={preguntas}
            />
            <ModalCorrect estado={correct} setEstado={setCorrect} />
          </div>
        </form>
      </div>
    </div>
  );
};

// count ? count :

export default Pregunton;
