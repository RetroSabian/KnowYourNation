import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { ReactReader } from "react-reader";
import { NavLink } from "react-router-dom";
import "./ArticleButtons.scss";
import "./GlobalStyle.scss";
import "./ArticleReader.scss";
import Share from "./Share";
import "../Fragments/Navbuttons.scss";

import {
  Container,
  ReaderContainer,
  FontSizeButton,
  ExitFullScreenButton
} from "./Components";

const storage = global.localStorage || null;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      article: [],
      sharing: false,
      bookmarked: false,
      fullscreen: false,
      url: "https://gerhardsletten.github.io/react-reader/files/alice.epub",
      title: "Alice in wonderland",
      location:
        storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2,
      largeText: false
    };
    this.rendition = null;
  }

  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent("UIEvents");
          evt.initUIEvent("resize", true, false, global, 0);
        }, 1000);
      }
    );
  };

  onLocationChanged = location => {
    this.setState(
      {
        location
      },
      () => {
        storage && storage.setItem("epub-location", location);
      }
    );
  };

  onToggleFontSize = () => {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState
      },
      () => {
        this.rendition.themes.fontSize(nextState ? "140%" : "100%");
      }
    );
  };

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");
  };

  handleSharing = () => {
    this.setState({
      sharing: !this.state.sharing
    });
  };

  handleBookmark = () => {
    this.setState({
      bookmarked: !this.state.bookmarked
    });
  };

  render() {
    var navBarTitle = "Name of The Book";
    var navbarItems = [true, true, true, true];
    const { fullscreen, location } = this.state;
    const { isLoaded, article } = this.state;

    return (
      <Container className="createGlobalStyle reader-containers">
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />

        <ReaderContainer
          className="reader-container bar"
          fullscreen={fullscreen}
        >
          <ReactReader
            url={this.state.url}
            locationChanged={this.onLocationChanged}
            title={this.state.title}
            location={location}
            getRendition={this.getRendition}
          />
          <FontSizeButton
            className="font-size-button"
            onClick={this.onToggleFontSize}
          >
            Toggle font-size
          </FontSizeButton>

          {this.state.fullscreen ? (
            <ExitFullScreenButton
              className="exit-fullscreen-button"
              onClick={this.toggleFullscreen}
            >
              Exit FullScreen
            </ExitFullScreenButton>
          ) : (
            <div />
          )}
        </ReaderContainer>
        {this.state.sharing ? (
          <div className="reader-buttons">
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
          <div className="reader-buttons">
            <a className="circle-btn--gray" onClick={this.toggleFullscreen}>
              FullScreen{" "}
            </a>

            {this.state.bookmarked ? (
              <a className="circle-btn--yellow" onClick={this.handleBookmark}>
                Bkmrk{" "}
              </a>
            ) : (
              <a className="circle-btn--gray" onClick={this.handleBookmark}>
                Bkmrk{" "}
              </a>
            )}
            <a className="circle-btn--gray" onClick={this.handleSharing}>
              {" "}
              Share{" "}
            </a>
            <NavLink to="/videoplayer">
              <a className="circle-btn--video">Watch Video </a>
            </NavLink>
          </div>
        )}
      </Container>
    );
  }
}

export default Article;
