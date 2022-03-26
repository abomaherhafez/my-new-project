import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_footer">
        <div className="socialmedia_links">
          <h1>Follow Us</h1>
          <div>
            <img
              src="https://i.imgur.com/pfcIVI9.png"
              alt="facebook"
              className="social_icons"
            />
            <Link to="https://www.facebook.com/">
              <img
                src="https://i.imgur.com/CBAfZK8.png"
                alt="instagram"
                className="social_icons"
              />
            </Link>
            <img
              src="https://i.imgur.com/zBvGrB2.png"
              alt="twitter"
              className="social_icons"
            />
          </div>
        </div>
      </div>
      <div className="logo_copyright">
        <div className="nav-logo">
          Blog-Blog
          <i className="fas fa-code"></i>
        </div>
        <div className="copyright"></div>
      </div>
    </div>
  );
};

export default Footer;
