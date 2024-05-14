import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeHero from "./pages/HomeHero";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomeHero />}  />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
