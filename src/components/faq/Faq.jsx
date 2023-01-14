import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./faq.css";
import { queries } from "./FaqApi";
import MyFaq from "./MyFaq";

const Faq = () => {
  const [data, setData] = useState(queries);
  return (
    <div className="faq-section">
      <div className="upper-faq">
        <h1 className="faq-heading">Frequently Asked Questions</h1>

        <div className="faq">
          {data.map((item) => {
            const { id } = item;
            return <MyFaq key={id} {...item} />;
          })}
        </div>
      </div>

      <div className="lower-faq">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email">
          <input type="email" placeholder="Email address" />
          <Link to="/netflixshow">
            <button className="getstarted">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
