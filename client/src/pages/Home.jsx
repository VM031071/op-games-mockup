import { Link } from 'react-router';

function Home() {
  console.log("Hello world! (Home.jsx)");
  
  return (
    <>
      <div>
        <h1>
          Home Page
        </h1>
      </div>

      <div>
        <h2>
          Featured Games
        </h2>
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
    </>
  );
};

export default Home;