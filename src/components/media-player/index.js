import React from "react";
import ReactPlayer from "react-player";
import "./style.scss";

const MediaPlayer = ({ src }) => {
  return (
    <div className="player-wrapper" style={{ height: 400 }}>
      <ReactPlayer
        controls={true}
        previewTabIndex={"1"}
        className="react-player"
        volume={0.5}
        url={src || "https://vibhu-courses.s3.ap-south-1.amazonaws.com/course/Ramayanam/section-1/lesson-1/my_video_manifest.mpd"}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default MediaPlayer;
