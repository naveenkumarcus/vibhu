// import React, { useEffect } from "react";
// import "./style.scss";
// import "shaka-player/dist/controls.css";
// const shaka = require("shaka-player/dist/shaka-player.compiled.debug.js");
// shaka.polyfill.installAll();

// const SamplePlayer = () => {
//   const src = "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd";
//   const videoContainer = document.getElementById("video-container");
//   const video = document.getElementById("video");
//   const player = new shaka.Player(video);

//   useEffect(() => {
//     player.load(src).catch(error => {
//       console.error(error);
//     });
//   }, []);

//   const getNewVideoSize = (aspect, dimension) => {
//     const aspectArr = aspect.split(":");
//     const aspectRatio = +aspectArr[0] / +aspectArr[1]; // get digit aspect coefficient

//     const { width, height } = dimension; // get screen sizes
//     const screenRatio = width / height; // screen aspect coefficient

//     let videoWidth;
//     let videoHeight;
//     const applyCoeff = screenRatio / aspectRatio; // calc ratio of aspects
//     if (applyCoeff >= 1) {
//       // dimension.width >= dimension.height
//       videoHeight = height;
//       videoWidth = height * aspectRatio;
//     } else {
//       // dimension.width < dimension.height
//       videoWidth = width;
//       videoHeight = width / aspectRatio;
//     }

//     return {
//       videoWidth,
//       videoHeight,
//     };
//   };

//   const getVideoStyles = (aspect, width, height) => ({
//     width: `${width}px`,
//     height: `${height}px`,
//     left: "50%",
//     top: "50%",
//     marginLeft: `-${width / 2}px`,
//     marginTop: `-${height / 2}px`,
//     objectFit: "fill",
//   });

//   const onAspectRatio = aspect => {
//     const dimensionWidth = videoContainer.offsetWidth;
//     const dimensionHeight = videoContainer.offsetHeight;

//     const { videoWidth, videoHeight } = getNewVideoSize(aspect, { width: dimensionWidth, height: dimensionHeight });

//     const styles = getVideoStyles(aspect, videoWidth, videoHeight);

//     Object.keys(styles).map(function (key, index) {
//       this.video.style[key] = styles[key];
//     });
//   };

//   return (
//     <div className="root">
//       <div ref={videoContainer}>
//         <video ref={video} controls></video>
//       </div>

//       <button className="button" onClick={onAspectRatio("1:1")}>
//         Aspect ratio 1:1
//       </button>
//       <button className="button" onClick={onAspectRatio("4:3")}>
//         Aspect ratio 4:3
//       </button>
//       <button className="button" onClick={onAspectRatio("14:10")}>
//         Aspect ratio 14:10
//       </button>
//       <button className="button" onClick={onAspectRatio("16:9")}>
//         Aspect ratio 16:9
//       </button>
//       <button className="button" onClick={onAspectRatio("19:10")}>
//         Aspect ratio 19:10
//       </button>
//       <button className="button" onClick={onAspectRatio("21:9")}>
//         Aspect ratio 21:9
//       </button>
//     </div>
//   );
// };

// export default SamplePlayer;
