import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Header from "./Components/Header/Header";
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <Contact />
    </div>

  );
}

export default App;
