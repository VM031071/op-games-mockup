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
        <Link to="/games">
          <button>
            <img src="/vite.svg" alt="placeholder image"/>
          </button>
        </Link>
        <br></br>
        <button>
          <img src="/vite.svg" alt="placeholder image"/>
        </button>
        <br></br>
        <button>
          <img src="/vite.svg" alt="placeholder image"/>
        </button>
      </div>
    </>
  );
};

export default Home;