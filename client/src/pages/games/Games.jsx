import { Link } from 'react-router';

import "./Games.css";

function Games({ borderState }) {
	console.log("Hello world! (Games.jsx)");
  const gamesRoot = borderState ? 'gamesRootBorder' : 'gamesRoot';
  const gamesList = borderState ? 'gamesListBorder' : 'gamesList';
  const gameInfo = borderState ? 'gameInfoBorder' : 'gameInfo';
	
	return (
		<>
      <div className={gamesRoot}>
        <div>
          <h1>
            Games Page
          </h1>
        </div>

        <div className={gamesList}>
          <div className={gameInfo}>
            <Link to="/games/game1">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>
            <p>
              Game 1 description.
            </p>
          </div>

          <div className={gameInfo}>
            <Link to="/games/game2">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>
            <p>
              Game 2 description.
            </p>
          </div>
          
          <div className={gameInfo}>
            <Link to="/games/game3">
              <button>
                <img src="/vite.svg" alt="placeholder image"/>
              </button>
            </Link>
            <p>
              Game 3 description.
            </p>
          </div>
        </div>
      </div>
		</>
	);
};

export default Games;