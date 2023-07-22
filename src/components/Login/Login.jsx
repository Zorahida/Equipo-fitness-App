import { useState } from "react";
import { useLocation } from "react-router-dom";


const initial_state = {
  email: "",
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
      <div className="container-login">
        <div className="body-login">
          <form onSubmit={submitForm}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeInput}
                value={formData.email}
              />
            </label>
            <label htmlFor="pass">
              Contraseña
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Contraseña"
                onChange={changeInput}
                value={formData.password}
              />
            </label>
            <div>
            <button type="submit">Iniciar sesión</button>
            </div>
            {loginError ? (
              <div style={{ color: "red" }}>{loginError}</div>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
