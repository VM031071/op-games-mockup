import { Link } from 'react-router';

import "./Home.css";

function Home() {
  console.log("Hello world! (Home.jsx)");
  
  return (
    <>
      <div class="homeRoot">
        <div>
          <h1>
            Home Page
          </h1>
        </div>

        <div>
          <h2>
            Featured Games
          </h2>
        </div>

        <div class="featuredGames">
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
      </div>
    </>
  );
};

export default Home;