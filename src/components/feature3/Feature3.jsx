import React from "react";
import "./feature3.css";

const Feature3 = () => {
  return (
    <div className="feature3">
      <div className="left-tab">
        <h1>Watch everywhere.</h1>
        <h3>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h3>
      </div>
      <div className="right-tab">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
        />

        <video
          className="right-tab-video"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
          loop
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default Feature3;
