import { Link } from 'react-router';

import "./Home.css";
import "./HomeBorder.css";

function Home({ borderState, toggleBorder }) {
  console.log("Hello world! (Home.jsx)");
  const homeRoot = borderState ? "homeRootBorder" : "homeRoot";
  const featuredGames = borderState ? "featuredGamesBorder" : "featuredGames";
  const featuredGame = borderState ? "featuredGameBorder" : "featuredGame";
  
  return (
    <>
      <div className={homeRoot}>
        <div>
          <h1>
            Home Page
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

        <div>
          <div className={featuredGames}>
            <Link to="/games/game1">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>

            <Link to="/games/game2">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>

            <Link to="/games/game3">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>
          </div>

          <div className={featuredGame}>
            <p>
              <b>Featured Game</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;