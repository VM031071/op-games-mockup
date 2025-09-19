import { Link, useNavigate } from 'react-router';
import { useState } from "react";

import "./Home.css";
import "./HomeBorder.css";

function Home({ borderState, toggleBorder }) {
  try {
    // Debugging lines. *DELETE*
    console.log("Hello world! (Home.jsx)");
    //ErrorFunction();

    // Variables that toggle the class names of specific divs based on the borderState variable.
    const homeRoot = borderState ? "homeRootBorder" : "homeRoot";
    const featuredGamesList = borderState ? "featuredGamesListBorder" : "featuredGamesList";
    const showcasedGame = borderState ? "showcasedGameBorder" : "showcasedGame";

    // Dictionary that contains the file paths for game logos.
    const gameLogoDict = {
      0: "/rbbLogo.png",
      1: "/vite.svg",
      2: "/src/assets/react.svg"
    };
    // Variable and function for toggling the spotlight game. Note: gameState updates on rerender.
    const [gameState, setGameState] = useState(0);
    function toggleGame(i, event) {
      // In that case, event.ctrlKey does the trick.
      if (event.ctrlKey || event.metaKey) {
        const baseURL = "/games/";
        const url = baseURL + featuredGamesDict[i];
        window.open(url, "_blank");
        //console.log('Ctrl (or Cmd on Mac) + click detected');
      }
      else {
        setGameState(gameState => i);
        // Debugging line. *DELETE*
        console.log(gameState);
      };
    };

    // Dictionary that contains the url extension for each game's page.
    const featuredGamesDict = {
      0: "game1",
      1: "game2",
      2: "game3"
    };
    // Variables for navigation functions.
    const navigate = useNavigate();
    const baseURL = "/games/";
    // Function that handles navigation to a games page on a double click.
    function goToGame(i) {
      const url = baseURL + featuredGamesDict[i];
      navigate(url);
    };
    // Function that opens a game's page on a new tab on a middle mouse button click.
    function openGameTab(i) {
      const url = baseURL + featuredGamesDict[i];
      window.open(url, "_blank");
    };
    

    return (
      <>
      {/* Division for the entire Home webpage. */}
        <div className={homeRoot}>
          <div>
            <h1>
              Welcome to
              <br></br>
              Overpowered Games!
            </h1>
          </div>

          {/* Developer border button, toggles borders for App and any flex-wrapped component. *DELETE* */}
          <div>
            <button onClick={toggleBorder}>
              Toggle Border
            </button>
          </div>

          <div>
            <h2>
              Featured Games
            </h2>
          </div>

          {/* Division for the featured games and spotlight game. */}
          <div className="featuredGames">
            {/* Division for the featured games.
                Contains the games' logos in buttons to toggle the spotlight game when clicked. */}
            <div className={featuredGamesList}>
              <button onClick={(event) => toggleGame(0, event)} onDoubleClick={() => goToGame(0)} onAuxClick={() => openGameTab(0)}>
                <img src={gameLogoDict[0]} alt="roller ball battle logo"/>
              </button>

              <button onClick={(event) => toggleGame(1, event)} onDoubleClick={() => goToGame(1)} onAuxClick={() => openGameTab(1)}>
                <img src={gameLogoDict[1]} alt="placeholder image"/>
              </button>

              <button onClick={(event) => toggleGame(2, event)} onDoubleClick={() => goToGame(2)} onAuxClick={() => openGameTab(2)}>
                <img src={gameLogoDict[2]} alt="placeholder image"/>
              </button>
            </div>

            {/* Division for the spotlight game. */}
            <div className={showcasedGame}>
              <Link to={baseURL + featuredGamesDict[gameState]}>
                <img src={gameLogoDict[gameState]} alt="featured game"/>
              </Link>
            </div>
          </div>
        </div>
      </>
    );

  } catch (error) {
    console.error("error at Home");
  };
};

export default Home;