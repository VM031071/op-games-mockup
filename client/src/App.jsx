import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Body from "./pages/Body"
import "./App.css";
import "./AppBorder.css";

function App() {
  try {
    const [array, setArray] = useState([]);
    const fetchAPI = async() => {
      const response = await axios.get("http://localhost:8080/api");
      setArray(response.data.fruits);
      console.log(response.data.fruits);
    };

    useEffect(() => {
      fetchAPI();
    }, []);
    
    const [borderState, setBorderState] = useState(false);
    const toggleBorder = () => {
      setBorderState(prev => !prev);
    };
    const appRoot = borderState ? "appRootBorder" : "appRoot";

    
    return (
      <>
        <div className={appRoot}>
          <BrowserRouter>
            <div>
              <Header borderState={borderState} />
            </div>

            <div className="appBody">
              <Body borderState={borderState} toggleBorder={toggleBorder} />
            </div>

            <div>
              <Footer borderState={borderState} />
            </div>
          </BrowserRouter>
        </div>
      </>
    );

  } catch (error) {
    console.error("error at App");
  };
};

export default App;
