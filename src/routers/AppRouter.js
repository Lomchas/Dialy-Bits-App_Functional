import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import App from '../containers/App'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
             <Route path="/login" element={<Login/>}/> 
             <Route path="/*" element={<Navigate to="/"/>} />
            <Route path="/signUp" element={<SignUp/>} />
            {/* <Route path="/home" element={}/>*/
            /* <Route path="/" element={}/> */ }
        </Routes>
    </BrowserRouter>
  )
}



export default AppRouter