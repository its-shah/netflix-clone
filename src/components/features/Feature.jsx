import React from "react";
import "./feature.css";

const Feature = () => {
  return (
    <div className="features">
      <div className="left-tv">
        <h1>Enjoy on your TV.</h1>
        <h3>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h3>
      </div>
      <div className="right-tv">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />

        <video
          className="right-tv-video"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          loop
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default Feature;
