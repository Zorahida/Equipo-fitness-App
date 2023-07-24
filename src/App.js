import "./styles/App.css";
import userList from "../src/data/userList.json";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
//import PersonalArea from "./components/PersonalArea/PersonalArea";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import TrainingList from "./components/TrainingList/TrainingList";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import UserList from "./components/UserList/UserList";

function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [trainings, setTrainings] = useState([]);

  useEffect(()=>{
    fetch("https://proyect-back-final1.vercel.app/fitnessBase")
    .then((response) => response.json())
    .then((data) => {
      setTrainings(data);
    })
  }, [])

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
      <div className="App">
        
      </div>

      <div className="App-header">
        <NavBar user={user} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingList trainings={trainings}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError}/>} />
          <Route path="/profile" element={<PersonalArea />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}


export default App;
