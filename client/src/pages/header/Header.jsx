import { Link } from 'react-router';

import "./Header.css";

function Header() {
  console.log("Hello world! (Header.jsx)");

  return (
    <>
      <div class="headerRoot">
        <Link to='/'>
          <p>
            <b>Home</b>
          </p>
        </Link>
        <Link to="/games">
          <p>
            <b>Games</b>
          </p>
        </Link>
        <Link to="/news">
          <p>
            <b>News</b>
          </p>
        </Link>
        <Link to="/faq">
          <p>
            <b>FAQ</b>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Header;