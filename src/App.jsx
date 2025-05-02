import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Projects from './Projects';
import Cv from './Cv';
import ScrollToTop from './assets/ScrollToTop';

function App() {
  return (
    <Router className="font-raleway">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  )
}

export default App;
