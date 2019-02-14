import React, { Component } from "react";
import "./Share.scss";
import exampleImage from "./react-share-pin-example.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon
} from "react-share";

class Share extends Component {
  state = {};
  render() {
    const shareUrl = "http://github.com";
    const title = "GitHub";

    return (
      <div className="container-fluid some-network">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          quote={title}
          className="share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}/${exampleImage}`}
          windowWidth={1000}
          windowHeight={730}
          className="share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </div>
    );
  }
}

export default Share;
