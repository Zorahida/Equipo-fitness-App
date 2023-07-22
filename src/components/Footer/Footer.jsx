import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav>
      <ul className="footer">
        {/* <li>
          <Link to="/">
            <img className="footer_img" src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/exerciseList">Ejercicios por grupo muscular</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Área personal</Link>
        </li>
        <li>
          <Link to="/userList">Lista de usuarios</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        <li>
          <button className="logout">Logout</button>
        </li> */}
      </ul>
      <p>
        ©2023 Gonzalo Cano | Lorena Cobo | Zorahida Domínguez | Lorena Cobo |
        Augusto Suñen | Andreu Rodríguez | All Rights Reserved
      </p>
    </nav>
  );
};

export default Footer;
