import { Link } from "react-router-dom";
import "./Footer.css";

const social1 = require("../../assets/images/instagram.png");
const social2 = require("../../assets/images/facebook-icon-white-png-1200x1200.png");
const social3 = require("../../assets/images/twitter.png");

const Footer = () => {
  return (
    <nav className="footer_nav">
      <ul className="footer_list">
        <li>
          <Link className="footer_list_element" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/training">
            Listado de entrenamientos
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/register">
            Registro
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/login">
            Iniciar sesión
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/profile">
            Área personal
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/userList">
            Lista de usuarios
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/about">
            Acerca de nosotros
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/terminosycondiciones">
            Términos y condiciones
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/contact">
            Contacto
          </Link>
        </li>
      </ul>
      <a href="https://www.instagram.com">
        <img className="footer_img" src={social1} alt=""></img>
      </a>
      <a href="https://www.facebook.com">
        <img className="footer_img" src={social2} alt=""></img>
      </a>
      <a href="https://www.twitter.com">
        <img className="footer_img" src={social3} alt=""></img>
      </a>
      <p className="footer_text">
        ©2023 Gonzalo Cano | Zorahida Domínguez | Lorena Cobo | Augusto Suñen |
        Andreu Rodríguez | All Rights Reserved
      </p>
    </nav>
  );
};

export default Footer;
