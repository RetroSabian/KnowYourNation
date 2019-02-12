import React, { Component } from "react";
import "../../../../node_modules/video-react/dist/video-react.css";

import { Player } from "video-react";

// class Video extends Component {
//   state = {};
//   render() {
//     return <div>Video Player</div>;
//   }
// }

// export default Video;

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};
