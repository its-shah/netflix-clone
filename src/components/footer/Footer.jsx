import { Language } from "@mui/icons-material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <span>Questions? Call 000-800-919-1694</span>
      </div>

      <div className="footer-links">
        <div className="spans">
          <span>FAQ</span>
          <span>Investor Relations</span>
          <span>Privacy</span>
          <span>Speed Test</span>
        </div>

        <div className="spans">
          <span>Help Centre</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
          <span>Legal Notices</span>
        </div>

        <div className="spans">
          <span>Account</span>
          <span>Ways to Watch</span>
          <span>Corporate information</span>
          <span>Only on Netflix</span>
        </div>

        <div className="spans">
          <span>Media Centre</span>
          <span>Terms of Use</span>
          <span>Contact Us</span>
          <span>Only on Netflix</span>
        </div>
      </div>

      <div className="footer-lang-container">
        <Language className="footer-svg" />
        <select name="language" className="language-select">
          <option value="english">English</option>
          <option value="hindi">हिन्दी</option>
        </select>
      </div>

      <p className="footer-branding-name">Netflix India</p>
    </div>
  );
};

export default Footer;
