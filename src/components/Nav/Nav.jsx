import { Link } from "react-router-dom";

const NavBar = ({ user, logoutUser }) => {
  return (
    <nav>
      <div className="container-nav">
        <ul className="menu-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/training">Listado de entrenamientos</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
          {user ? (
            <button onClick={logoutUser}>Cerrar sesión</button>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </li>
          <li>
            <Link to="/profile">Área personal</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/about">Acerca de nosotros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
