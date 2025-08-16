import { Link } from 'react-router';

function Games() {
	console.log("Hello world! (Games.jsx)");
	
	return (
		<>
      <div>
        <div>
          <h1>
            Games Page
          </h1>
        </div>

        <div>
          <Link to="/games/game1">
            <button>
              <img src="/vite.svg" alt="placeholder image"/>
            </button>
          </Link>
          <br></br>
          <Link to="/games/game2">
            <button>
              <img src="/vite.svg" alt="placeholder image"/>
            </button>
          </Link>
          <br></br>
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

export default Games;