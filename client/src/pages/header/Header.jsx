import { Link } from 'react-router';

import "./Header.css";

function Header({ borderState }) {
  console.log("Hello world! (Header.jsx)");
  const headerRoot = borderState ? "headerRootBorder" : "headerRoot";

  return (
    <>
      <div className={headerRoot}>
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