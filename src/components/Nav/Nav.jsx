import "./nav.css";
import { Link } from "react-router-dom";

const logo = require("../../assets/images/logoOficial.png");

const NavBar = ({ user, logoutUser, theme }) => {
  return (
    <nav>
      <div className="container-nav">
        <ul className={theme ? "menu_nav_dark" : "menu_nav"}>
          <img className="logo" src={logo} alt="logo"></img>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/training">Listado de entrenamientos</Link>
          </li>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/register">Registro</Link>
          </li>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/profile">Área personal</Link>
          </li>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className={theme ? "list-nav_dark" : "list-nav"}>
            <Link to="/about">Acerca de nosotros</Link>
          </li>
          <li className="list-nav-login">
            {user ? (
              <button className="button-nav" onClick={logoutUser}>
                Cerrar sesión
              </button>
            ) : (
              <Link className={theme ? "login_dark" : "login"} to="/login">
                Iniciar sesión
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
