import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
