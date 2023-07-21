import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hola</h1>
      </div>

      <div className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PersonalArea />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
/* <Route path="/training" element={<TrainingList />}/> ----> Pendiente de crear el componente*/


export default App;
