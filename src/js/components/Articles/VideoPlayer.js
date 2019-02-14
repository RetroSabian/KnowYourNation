import React, { Component } from "react";
import "../../../../node_modules/video-react/dist/video-react.css";
import "./ArticleButtons.scss";
import Navbar from "../Navbar/Navbar";
import { Player } from "video-react";
import "./VideoPlayer.scss";
import "../Fragments/Navbuttons.scss";
import Share from "./Share";

class VideoPlayer extends Component {
  state = {
    share: false,
    bookmarked: false
  };

  handleSharing = () => {
    this.setState({
      sharing: true
    });
  };

  handleBookmark = () => {
    this.setState({
      bookmarked: !this.state.bookmarked
    });
  };

  render() {
    var navBarTitle = "Name of The Video";
    var navbarItems = [true, true, true, true];
    return (
      <div className="videoplayer-container">
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />

        {this.state.sharing ? (
          <div>
            {" "}
            <button className="btn-nav-button center-nav-button">
              <i className="fas fa-angle-down" />
            </button>{" "}
            <div>
              {" "}
              <Share />{" "}
            </div>
          </div>
        ) : (
          <div>
            <a className="circle-btn--videoplayer">FullScreen </a>

            {this.state.bookmarked ? (
              <a className="circle-btn--yellow" onClick={this.handleBookmark}>
                Bkmrk{" "}
              </a>
            ) : (
              <a
                className="circle-btn--videoplayer"
                onClick={this.handleBookmark}
              >
                Bkmrk{" "}
              </a>
            )}

            <a className="circle-btn--videoplayer" onClick={this.handleSharing}>
              {" "}
              Share{" "}
            </a>
          </div>
        )}

        <div>
          <span className="label label-default">{navBarTitle}</span>
        </div>

        <div className="nav-buttons">
          <button className="btn-nav-button left-nav-button">Volunteer</button>

          <button className="btn-nav-button right-nav-button">Donate</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
