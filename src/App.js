import "./styles/App.css";
import "./styles/Toggle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { contextUse, color } from "./components/UseContext/UseContext";
import Toggle from "react-toggle";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Terminos from "./components/TerminosyCondiciones/TerminosyCondiciones";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import TrainingList from "./components/TrainingList/TrainingList";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import React from "react";
import UserList from "./components/UserList/UserList";
import UserModify from "./components/UserList/UserModify";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoute from "./components/Admin/AdminRoute";

function App() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch("https://proyect-back-final-olive.vercel.app/fitnessBase")
      .then((response) => response.json())
      .then((data) => {
        setTrainings(data);
      });
  }, []);

  const loginUser = (formData, prevRoute) => {
    console.log(formData);
    fetch("https://proyect-back-final-olive.vercel.app/usuariosBase/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.userInfo) {
          setUser(data.userInfo);
          setLoginError("");
          navigate(prevRoute || "/profile");
        } else {
          setUser(false);
          setLoginError(data.message);
          navigate("/login");
        }
      });
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <div className={theme ? "dark" : "light"}>
        <color.Provider value={theme}>
          <NavBar theme={theme} user={user} logoutUser={logoutUser} />
          <contextUse.Provider value={user}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/training"
                element={<TrainingList trainings={trainings} />}
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={
                  <Login loginUser={loginUser} loginError={loginError} />
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute
                    user={user}
                    component={<PersonalArea user={user} />}
                  />
                }
              />
              <Route
                path="/userList"
                element={
                  <AdminRoute
                    user={user}
                    component={<UserList user={user} />}
                  />
                }
              />
              <Route
                path="UserModify/:usuario.Id"
                element={
                  <AdminRoute
                    user={user}
                    component={<UserModify user={user} />}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/terminosycondiciones" element={<Terminos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <div className="toggle_container">
              <Toggle
                checked={theme}
                onChange={({ target }) => setTheme(target.checked)}
                icons={{ checked: "🔆", unchecked: "🌙" }}
                aria-label="Dark mode toggle"
              />
              {theme ? (
                <p className="modo_text">Modo Dia</p>
              ) : (
                <p className="modo_text">Modo Noche</p>
              )}
            </div>
            <Footer />
          </contextUse.Provider>
        </color.Provider>
      </div>
    </>
  );
}

export default App;
