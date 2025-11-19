import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Request from "./pages/Request.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Request" element={<Request />} />

      </Routes>
    </div>
  )
}

export default App