import React from "react";
import "./feature2.css";

const Feature2 = () => {
  return (
    <div className="feature2">
      <div className="left-mobile">
        <h1>Download your shows to watch offline.</h1>
        <h3>Save your favourites easily and always have something to watch.</h3>
      </div>
      <div className="right-mobile">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />

        <div className="downloading-preview">
          <div className="downloading-banner">
            <img
              className="downloading-banner"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
          </div>

          <div className="downloading">
            <div className="downloading-content">
              <h3>Stranger Things</h3>
              <p>Downloading...</p>
            </div>

            <div className="downloading-logo">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
