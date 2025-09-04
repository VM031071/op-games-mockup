import { Link, useNavigate } from 'react-router';
import { useState } from "react";

import "./Home.css";
import "./HomeBorder.css";

function Home({ borderState, toggleBorder }) {
  console.log("Hello world! (Home.jsx)");
  const homeRoot = borderState ? "homeRootBorder" : "homeRoot";
  const featuredGamesList = borderState ? "featuredGamesListBorder" : "featuredGamesList";
  const showcasedGame = borderState ? "showcasedGameBorder" : "showcasedGame";

  const gameLogoDict = {
    0: "/rbbLogo.png",
    1: "/vite.svg",
    2: "/src/assets/react.svg"
  };
  const [gameState, setGameState] = useState(0);
  function toggleGame(i) {
    setGameState(gameState => i);
    console.log(i);
  };

  const featuredGamesDict = {
    0: "game1",
    1: "game2",
    2: "game3"
  };
  const navigate = useNavigate();
  function goToGame(i) {
    navigate("/games/" + featuredGamesDict[i]);
  };
  
  return (
    <>
      <div className={homeRoot}>
        <div>
          <h1>
            Welcome to
            <br></br>
            Overpowered Games!
          </h1>
        </div>

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

        <div className="featuredGames">
          <div className={featuredGamesList}>
            <button onClick={() => toggleGame(0)} onDoubleClick={() => goToGame(0)}>
              <img src={gameLogoDict[0]} alt="roller ball battle logo"/>
            </button>

            <button onClick={() => toggleGame(1)} onDoubleClick={() => goToGame(1)}>
              <img src={gameLogoDict[1]} alt="placeholder image"/>
            </button>

            <button onClick={() => toggleGame(2)} onDoubleClick={() => goToGame(2)}>
              <img src={gameLogoDict[2]} alt="placeholder image"/>
            </button>
          </div>

          <div className={showcasedGame}>
            <img src={gameLogoDict[gameState]} alt="featured game"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;