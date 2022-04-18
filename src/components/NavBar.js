import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = memo(() => {
  const [userType, setUserType] = useState({});

  const traerUser = () => {
    const local = JSON.parse(localStorage.getItem("user"));
    setUserType(local.type);
  };

  useEffect(() => {
    traerUser();
  }, []);

  return (
    <>
      {userType !== "ADMIN" ? (
        <div className="navBar-container">
          <div className="home-nav nav">
            <NavLink
              to="/home"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 20.7957 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H9H15H19C19.7957 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7957 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V21ZM10 21V13H14V21H10Z"
                  />
                </svg>

              <p className="text-nav">Home</p>
            </NavLink>
          </div>
          <div className="estadisticas-nav nav">
            <NavLink
              to="/estadisticas"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.94868 2.68377C9.81257 2.27543 9.43043 2 9 2C8.56957 2 8.18743 2.27543 8.05132 2.68377L5.27924 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H6C6.43043 13 6.81257 12.7246 6.94868 12.3162L9 6.16228L14.0513 21.3162C14.1874 21.7246 14.5696 22 15 22C15.4304 22 15.8126 21.7246 15.9487 21.3162L18.7208 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H18C17.5696 11 17.1874 11.2754 17.0513 11.6838L15 17.8377L9.94868 2.68377Z"
                  />
                </svg>
              <p className="text-nav">Estadisticas</p>
            </NavLink>
          </div>
          <div className="perfil-nav nav">
            <NavLink
              to="/perfil"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7ZM12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z"
                  />
                </svg>
              <p className="text-nav">Perfil</p>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="navBar-container">
          <div className="home-nav nav">
            <NavLink
              to="/home"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 20.7957 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H9H15H19C19.7957 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7957 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V21ZM10 21V13H14V21H10Z"
                  />
                </svg>
              <p className="text-nav">Home</p>
            </NavLink>
          </div>
          <div className="estadisticas-nav nav">
            <NavLink
              to="/estadisticas"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.94868 2.68377C9.81257 2.27543 9.43043 2 9 2C8.56957 2 8.18743 2.27543 8.05132 2.68377L5.27924 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H6C6.43043 13 6.81257 12.7246 6.94868 12.3162L9 6.16228L14.0513 21.3162C14.1874 21.7246 14.5696 22 15 22C15.4304 22 15.8126 21.7246 15.9487 21.3162L18.7208 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H18C17.5696 11 17.1874 11.2754 17.0513 11.6838L15 17.8377L9.94868 2.68377Z"
                  />
                </svg>
              <p className="text-nav">Estadisticas</p>
            </NavLink>
          </div>
          <div className="perfil-nav nav">
            <NavLink
              to="/perfil"
              className={(navData) =>
                navData.isActive ? "nav-active categ fill-active" : "categ fill"
              }
            >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7ZM12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z"
                  />
                </svg>
              <p className="text-nav">Perfil</p>
            </NavLink>
          </div>
          <div className="Admi-nav nav">
            <NavLink
              to="/admin"
              className={(navData) =>
                navData.isActive ? "nav-active categ" : "categ"
              }
            >
              <p className="text-nav">ADMIN</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
});

export default NavBar;
