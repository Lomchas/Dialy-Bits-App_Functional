import React from "react";
import '../styles/Modal.css'


export const ModalIncorrect = ({ estado, setEstado, preguntas }) => {
    const handleCerrar = () => {
        setEstado(false)
    }

  return (
    <>
      {estado && 
        <div className="Modal">
          <div className="headerModal">
            <p>La respuesta correcta es: </p>
          </div>
          <div className="bodyModal">
            <p>{preguntas.preguntas.correcta}</p>
          </div>
          <div className="footerModal">
            <button type="button" onClick={handleCerrar}>Continuar</button>
          </div>
        </div>
      }
    </>
  );
};
export const ModalCorrect = ({ estado, setEstado }) => {
    const handleCerrar = () => {
        setEstado(false)
    }
  return (
    <>
      {estado && 
        <div className="Modal"
        style={{background: '#ACFFCF'}}>
          <div className="headerModal">
            <p style={{color: 'black'}}>¡BUEN TRABAJO!</p>
          </div>
          <div className="footerModal">
            <button type="button"
            style={{background: '#2CB67D'}} onClick={handleCerrar} >Continuar</button>
          </div>
        </div>
      }
    </>
  );
};

