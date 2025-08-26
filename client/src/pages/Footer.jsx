import { Link } from 'react-router';

import "./Footer.css";
import "./FooterBorder.css";

function Footer({ borderState }) {
  console.log("Hello world! (Footer.jsx)");
  const footerRoot = borderState ? "footerRootBorder" : "footerRoot";

  return (
    <>
      <div className={footerRoot}>
        <div>
          <Link to="/contact">
            <p>
              <b>Contact Us</b>
            </p>
          </Link>
        </div>

        <div>
          <Link to="/support">
            <p>
              <b>Support</b>
            </p>
          </Link>
        </div>

        <div>
          <Link to="/careers">
            <p>
              <b>Careers</b>
            </p>
          </Link>
        </div>

        <div>
          <Link to="/terms-and-conditions">
            <p>
              <b>Terms and Conditions</b>
            </p>
          </Link>
        </div>

        <div>
          <Link to="/privacy-policy">
            <p>
              <b>Privacy Policy</b>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;