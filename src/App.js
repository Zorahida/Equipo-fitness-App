import "./styles/App.css";
import "./styles/Toggle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { contextUse, color } from "./components/UseContext/UseContext";
import Toggle from "react-toggle";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import TerminosyCondiciones from "./components/TerminosyCondiciones/TerminosyCondiciones";
//import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import TrainingList from "./components/TrainingList/TrainingList";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import React from "react";
import UserList from "./components/UserList/UserList";
import UserModify from "./components/UserList/UserModify";




function App () {

  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState(null);
 // const [loginError, setLoginError] = useState("");
  const [trainings, setTrainings] = useState([]);

  useEffect(()=>{
    fetch("https://proyect-back-final1.vercel.app/fitnessBase")
    .then((response) => response.json())
    .then((data) => {
      setTrainings(data);
    })
  }, [])


/*const loginUser = (formData, prevRoute) => {
    try {
    fetch("https://proyect-back-final1.vercel.app/usuariosBase", {method: "POST", body: JSON.stringify(formData)})
    .then((response) => response.json())
    .then((data) => {
      setUser(data);

      navigate(prevRoute || "/profile")
    });
   } catch(error) {
      setLoginError(error);
    }*/




    /*const existsUser = user.map(
      (users) =>
        users.correo === formData.email && users.password === formData.password
    );
    if (existsUser) {
      setUser(existsUser);
      setLoginError("");
      navigate(prevRoute || "/profile");
    } else {
      setUser(false); 
      console.log(existsUser);
      console.log("Adios");
      setLoginError("Usuario o contraseña incorrectos");
    }
  };*/

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <> 
      <div>
     <Toggle
        checked={theme}
        onChange={({ target }) => setTheme(target.checked)}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode toggle"
      />
      <div className={theme ? "light" : "dark"}>
      <color.Provider value={theme}>
   
       {/* <>
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>*/}
        <NavBar user={user} logoutUser={logoutUser}/>
        <contextUse.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingList trainings={trainings}/>} />
          <Route path="/register" element={<Register />} />
          {/*<Route path="/login" element={<Login loginUser={loginUser} loginError={loginError}/>} />*/}
          <Route path="/profile" element={<PersonalArea />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/userModify/:usuario.Id" element={<UserModify />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terminosycondiciones" element={<TerminosyCondiciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </contextUse.Provider>
        </color.Provider>
        </div>
        <Footer/>
      </div>
    </>
  );
}



export default App;
