import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="title">
        <h1>
          Unlimited movies, TV
          <br />
          shows and more.
        </h1>

        <h4>Watch anywhere. Cancel anytime.</h4>

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      <div className="email">
        <input type="email" placeholder="Email address" />
        <button className="getstarted">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
