import { Language } from "@mui/icons-material";
import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-container">
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
          alt=""
        />

        <div className="right-cta">
          <div className="lang-container">
            <Language className="svg" />
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>

          <Link to="/netflixshow" className="sign-in">
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
