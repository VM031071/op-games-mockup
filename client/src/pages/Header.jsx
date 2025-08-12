import { Link } from 'react-router';

function Header() {
	console.log("Hello world! (Header.jsx)");

	return (
		<>
			<div>
				<h1>
					Header
				</h1>
			</div>
			<div>
				<Link to='/'>
          <h3>
						<b>Home</b>
					</h3>
        </Link>
			</div>
		</>
	);
};

export default Header;