import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Games from "./pages/Games";
import Header from "./pages/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import TermsAndConditions from "./pages/TermsAndConditions";
//import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async() => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/game1" element={<Game1 />} />
          <Route path="/games/game2" element={<Game2 />} />
          <Route path="/games/game3" element={<Game3 />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
