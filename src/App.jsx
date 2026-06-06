import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Projects from './Projects';
import ScrollToTop from './assets/ScrollToTop';
import Internship from './Internship';

function App() {
  return (
    <Router className="font-raleway">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </Router>
  )
}

export default App;
