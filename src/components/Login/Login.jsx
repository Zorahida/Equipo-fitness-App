import "./login.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const initial_state = {
  correo: "",
  password: "",
};

const Login = ({ loginUser, loginError }) => {
  const location = useLocation();
  const { state } = location;
  const [formData, setFormData] = useState(initial_state);

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(formData, state ? state.prevRoute : null);
    setFormData(initial_state);
  };

  return (
    <>
      <div className="title-login">
        <h1>Iniciar sesión</h1>
      </div>
      <div className="container-login">
        <div className="body-login">
          <form className="form-login" onSubmit={submitForm}>
            <label htmlFor="correo">
              {/*Email*/}
              <input
                className="register_input"
                type="email"
                name="correo"
                id="correo"
                placeholder="Email*"
                onChange={changeInput}
                value={formData.correo}
              />
            </label>
            <label htmlFor="pass">
              {/*Contraseña*/}
              <input
                className="register_input"
                type="password"
                name="password"
                id="pass"
                placeholder="Contraseña*"
                onChange={changeInput}
                value={formData.password}
              />
            </label>
            <button className="submit-login" type="submit">
              Iniciar sesión
            </button>
            <div className="error-login">
              {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
            </div>
          </form>
          <div className="redirect-login">
            <Link className="register_link" to="/register">
              ¿Aún no tienes cuenta? Regístrate
            </Link>
          </div>
          <p className="login_text">*Campo requerido</p>
        </div>
      </div>
    </>
  );
};

export default Login;
