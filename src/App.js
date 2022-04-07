import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>


  );
}

export default App;
