import React from "react";
import Card from "../card/Card";
import "./row.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className="cards-container">
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default Row;
