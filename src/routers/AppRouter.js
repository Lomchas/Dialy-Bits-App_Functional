import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdmiZone from "../components/AdmiZone";
import Estadisticas from "../components/Estadisticas";
import Home from "../components/Home";
import Into from "../components/Into";
import Login from "../components/Login";
import Perfil from "../components/Perfil";
import Pregunton from "../components/Pregunton";
import SignUp from "../components/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Into />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/pregunton" element={<Pregunton />} />
        <Route path="/admin" element={<AdmiZone/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
