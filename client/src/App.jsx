import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Body from "./pages/Body"
import "./App.css";

function App() {
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
      <div class="appRoot">
        <BrowserRouter>
          <div>
            <Header />
          </div>

          <div>
            <Body />
          </div>

          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
