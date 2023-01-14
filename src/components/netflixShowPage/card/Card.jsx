import React from "react";
import "./card.css";

const Card = ({ img }) => {
  return (
    <div className="poster-container">
      <img className="poster-img" src={img} alt="poster" />
    </div>
  );
};

export default Card;
