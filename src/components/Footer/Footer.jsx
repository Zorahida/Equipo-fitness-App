import { Link } from "react-router-dom";

// const logo = require("")
const social1 = require("../../assets/images/instagram.png")
const social2 = require("../../assets/images/facebook-icon-white-png-1200x1200.png")
const social3 = require("../../assets/images/twitter.png")

const Footer = () => {
  return (
    <nav className="footer_nav">
      <ul>
        <li>
          <Link to="/">
          <img className="footer_img" src={logo} alt="" />
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
        </li>
      </ul>
      <a href="#"><img className="footer_img" src={social1} alt=""></img></a>
      <a href="#"><img className="footer_img" src={social2} alt=""></img></a>
      <a href="#"><img className="footer_img" src={social3} alt=""></img></a>
      <p>
        ©2023 Gonzalo Cano | Lorena Cobo | Zorahida Domínguez | Lorena Cobo |
        Augusto Suñen | Andreu Rodríguez | All Rights Reserved
      </p>
    </nav>
  );
};

export default Footer;
