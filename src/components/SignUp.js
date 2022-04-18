import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Url } from "../helpers/Url";
import { useForm } from "../hooks/useForm";
import logoApp from "../images/Color=Purple, Container=Yes.png";
import "../styles/signUp.css";





const SignUp = () => {

  const initialState = {
  
    type: "USUARIO",
    nombre: "",
    email: "",
    password: "",
    password2: '',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    estadisticas: [
      {
        categoria: 'HTML',
        correctas: 0,
        incorrectas: 0,
        contestadas: 0
      },
      {
        categoria: 'CSS',
        correctas: 0,
        incorrectas: 0,
        contestadas: 0
      },
      {
        categoria: 'JS',
        correctas: 0,
        incorrectas: 0,
        contestadas: 0
      },
      {
        categoria: 'FIGMA',
        correctas: 0,
        incorrectas: 0,
        contestadas: 0
      },
      {
        categoria: 'UX',
        correctas: 0,
        incorrectas: 0,
        contestadas: 0
      }
    ]
  
  }

  const [formValue, handleInputChange, reset, setValues] = useForm(initialState)
  // const [postUser, setPostUser] = useState(initialState)

  const {nombre, email, password, password2} = formValue;

  const madarUser = () => {
    fetch(Url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(formValue)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    alert('Registro axitoso')
  }

  console.log(formValue)

  const validarSignUp = (e) => {
    e.preventDefault()
    if(nombre.length === 0 || email.length === 0 || password === 0 || password2 === 0){
        alert('Desbes rellenar todos los campos para Registrarte')
    }
    else{
      if(password !== password2){
        alert('Las contraseñas no coinciden')
      }
      else{
        madarUser() 
          reset()
          window.location = '/login'
      }
    }
  }

  useEffect(() => {
    // madarUser()
    
  }, [])
  

  // console.log(postUser)

  return (
    <div className="signUp-container">
      <img alt="logoApp" width="100px" height="100px" src={logoApp} />
      <h2 className="title-signUp">Vamos a registrarte</h2>
      {/* <button type="button" onClick={()=>{
        fetch(Url + 11, {
          method: 'DELETE'
        }).then((res) => res.json())
        .then((res) => console.log(res))
      }}>
        delete
      </button> */}
       <hr />
      <form onSubmit={validarSignUp}>
        <label htmlFor="inputNames" className="labels">
          Nombres
          <input
            type="text"
            className="inputNames"
            placeholder="Ingrese tu nombre completo"
            autoComplete="false"
            name='nombre'
            value={nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="inputEmail" className="labels">
          Email
          <input
            type="email"
            className="inputEmail"
            placeholder="Ingrese tu Email"
            autoComplete="false"
            name='email'
            value={email}
            onChange={handleInputChange}

          />
        </label>
        <br />
        <label htmlFor="inputPassword" className="labels">
          Contraseña
          <input
            type="password"
            className="inputPassword"
            placeholder="Ingresa un contraseña"
            autoComplete="false"
            name='password'
            value={password}
            onChange={handleInputChange}

          />
          <br />
          <input
            type="password"
            className="inputPassword"
            placeholder="Confirma tu contraseña"
            autoComplete="false"
            name='password2'
            value={password2}
            onChange={handleInputChange}

          />
        </label>
          <button type="submit" className="btnRegistrar">
            Registrate ya!
          </button>
      </form>
    </div>
  );
};

export default SignUp;
