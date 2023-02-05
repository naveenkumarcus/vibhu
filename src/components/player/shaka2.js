import React, { useEffect, useRef } from "react";
import "shaka-player/dist/controls.css";
const shaka = require("shaka-player/dist/shaka-player.ui.js");
var _src = "https://vibhu-courses.s3.ap-south-1.amazonaws.com/course/section-1/Lesson-1/my_video_manifest.mpd";
shaka.polyfill.installAll();

const ShakaPlayer2 = ({src=_src}) => {
  const videoContainer = useRef(null);
  const video = useRef(null);

  const getNewVideoSize = (aspect, dimension) => {
    const aspectArr = aspect.split(":");
    const aspectRatio = +aspectArr[0] / +aspectArr[1]; // get digit aspect coefficient
    const { width, height } = dimension; // get screen sizes
    const screenRatio = width / height; // screen aspect coefficient

    let videoWidth, videoHeight;
    const applyCoeff = screenRatio / aspectRatio; // calc ratio of aspects
    if (applyCoeff >= 1) {
      // dimension.width >= dimension.height
      videoHeight = height;
      videoWidth = height * aspectRatio;
    } else {
      // dimension.width < dimension.height
      videoWidth = width;
      videoHeight = width / aspectRatio;
    }

    return {
      videoWidth,
      videoHeight,
    };
  };
  const getVideoStyles = (aspect, width, height) => ({
    width: `${width}px`,
    height: `${height}px`,
    left: "50%",
    top: "50%",
    marginLeft: `-${width / 2}px`,
    marginTop: `-${height / 2}px`,
    objectFit: "fill",
  });

  const onAspectRatio = aspect => {
    const dimensionWidth = videoContainer.current.offsetWidth;
    const dimensionHeight = videoContainer.current.offsetHeight;

    const { videoWidth, videoHeight } = getNewVideoSize(aspect, {
      width: dimensionWidth,
      height: dimensionHeight,
    });

    const styles = getVideoStyles(aspect, videoWidth, videoHeight);

    Object.keys(styles).forEach(function (key, index) {
      video.current.style[key] = styles[key];
    });
  };

  useEffect(() => {
    if (video.current) {
      onAspectRatio("16:9");
      const player = new shaka.Player(video.current);
      const ui = new shaka.ui.Overlay(player, videoContainer.current, video.current);
      const uiConfig = {
        addBigPlayButton: true,
        controlPanelElements: ["rewind", "fast_forward", "mute", "volume", "time_and_duration", "fullscreen", "overflow_menu"],
        showUnbufferedStart: true,
        seekBarColors: {
          // base: "#bb6400",
          buffered: "#ffc367",
          played: "#f39237",
        },
        overflowMenuButtons: ["captions", "quality", "language", "picture_in_picture", "cast", "playback_rate"],
      };
      ui.configure(uiConfig);
      window.player = player;
      player.load(src).catch(error => {
        if (error) console.error(error);
        else console.log("Player loaded");
      });
    }
    document.addEventListener("fullscreenchange", () => {
        onAspectRatio("16:9");
    });

    return function () {
      document.removeEventListener("fullscreenchange", event => {});
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="video-base">
      <div ref={videoContainer} id="video-container">
        <video ref={video} id="video"></video>
      </div>
    </div>
  );
};

export default ShakaPlayer2;
