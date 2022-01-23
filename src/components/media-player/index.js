import React from "react";
import ReactPlayer from "react-player";
import "./style.scss";

const MediaPlayer = ({ src }) => {
  return (
    <div className="player-wrapper" style={{ height: 400 }}>
      <ReactPlayer
        controls={true}
        // previewTabIndex={"1"}s
        className="react-player"
        volume={0.5}
        url={src}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default MediaPlayer;
