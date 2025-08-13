import { Link } from 'react-router';

function Footer() {
	console.log("Hello world! (Footer.jsx)");

	return (
		<>
			<div>
				<h2>
					Footer
				</h2>
        <Link to="/contact">
          <h3>
	  				<b>Contact Us</b>
		  		</h3>
        </Link>
        <Link to="/support">
          <h3>
	  				<b>Support</b>
		  		</h3>
        </Link>
        <Link to="/careers">
          <h3>
	  				<b>Careers</b>
		  		</h3>
        </Link>
        <Link to="/terms-and-conditions">
          <h3>
	  				<b>Terms and Conditions</b>
		  		</h3>
        </Link>
        <Link to="/privacy-policy">
          <h3>
	  				<b>Privacy Policy</b>
		  		</h3>
        </Link>
			</div>
		</>
	);
};

export default Footer;