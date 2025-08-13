import { Link } from 'react-router';

function Header() {
	console.log("Hello world! (Header.jsx)");

	return (
		<>
			<div>
				<h2>
					Header
				</h2>
			</div>

			<div>
				<Link to='/'>
          <h3>
						<b>Home</b>
					</h3>
        </Link>
        <Link to="/games">
          <h3>
						<b>Games</b>
					</h3>
        </Link>
        <Link to="/news">
          <h3>
					  <b>News</b>
				  </h3>
        </Link>
        <Link to="/faq">
          <h3>
					  <b>FAQ</b>
				  </h3>
        </Link>
			</div>
		</>
	);
};

export default Header;