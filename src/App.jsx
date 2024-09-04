import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Container } from "react-bootstrap"
import Hero from "./components/Hero"
import NavComponent from "./components/NavComponent"
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";


function App() {

  return (
    <Router>
      <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
    </Router>
  )
}

export default App
