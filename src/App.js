import "./styles/App.css";
import userList from "../src/data/userList.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import TerminosyCondiciones from "./components/TerminosyCondiciones/TerminosyCondiciones";
//import PersonalArea from "./components/PersonalArea/PersonalArea";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import TrainingList from "./components/TrainingList/TrainingList";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import React from "react";
import { Routes, Route } from "react-router-dom";




function App () {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const loginUser = (formData, prevRoute) => {
    const existsUser = userList.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (existsUser) {
      setUser(existsUser);
      setLoginError("");
      navigate(prevRoute || "/");
    } else {
      setUser(false);
      setLoginError("Usuario o contraseña incorrectos");
    }
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
   
        <>
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
         
         <div>
        <NavBar user={user} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingList/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError}/>} />
          <Route path="/profile" element={<PersonalArea />} />
          <Route path="/userList" element={<userList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terminosycondiciones" element={<TerminosyCondiciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}


export default App;
