import './nav.css'
import { Link } from "react-router-dom";

const NavBar = ({ user, logoutUser }) => {
  return (
    <nav>
      <div className="container-nav">
        <ul className="menu-nav">
          <li className='list-nav'>
            <Link to="/">Inicio</Link>
          </li>
          <li className='list-nav'>
            <Link to="/training">Listado de entrenamientos</Link>
          </li>
          <li className='list-nav'>
            <Link to="/register">Registro</Link>
          </li>
          <li className='list-nav'>
          {user ? (
            <button className="button-nav" onClick={logoutUser}>Cerrar sesión</button>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </li>
          <li className='list-nav'>
            <Link to="/profile">Área personal</Link>
          </li>
          <li className='list-nav'>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className='list-nav'>
            <Link to="/about">Acerca de nosotros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
