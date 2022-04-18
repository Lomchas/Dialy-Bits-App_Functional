import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/admi.css";
import { Url } from "../helpers/Url";

const AdmiZone = () => {
  const [users, setUsers] = useState([]);

  const traerUsers = () => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  console.log(users);

  useEffect(() => {
    traerUsers();
  }, []);

  return (
    <div className="contanier-admiZone">
      <div className="header-container">
        <h2>Admin</h2>
      </div>

      <div className="container-allUsers">
        {users.map((user) => (
          <div className="container-user" key={user ? user.id : 0}>
            <div className="container-photo">
              <img src={user ? user.image : "#"} width='40px' alt="user" />
            </div>
            <h3 className="nombre-user">{user ? user.nombre : "user000000"}</h3>
            <p className={ user.type === 'ADMIN' ? 'type-user-admin' : 'type-user'}>{user ? user.type : "type"}</p>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default AdmiZone;
