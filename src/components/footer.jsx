import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row__column footer__logo">
          <Link to="/">
            Movies
          </Link>
          <div className="footer__copyright">Copyright &copy; 2026 Movies</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
