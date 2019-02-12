import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { createGlobalStyle } from "styled-components";
import { ReactReader } from "./modules";
import { NavLink } from "react-router-dom";
import "./ArticleButtons.scss";
import {
  Container,
  ReaderContainer,
  FontSizeButton,
  ExitFullScreenButton
} from "./Components";

const storage = global.localStorage || null;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-weight: 300;
    line-height: 1.4;
    word-break: break-word;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 1.8rem;
    background: #333;
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
  }
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      article: [],
      fullscreen: false,
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

  render() {
    var navBarTitle = "Name of The Book";
    var navbarItems = [true, true, true, true];
    const { fullscreen, location } = this.state;
    const { isLoaded, article } = this.state;

    return (
      <Container>
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
        <GlobalStyle />
        <ReaderContainer fullscreen={fullscreen}>
          <ReactReader
            url={
              "https://gerhardsletten.github.io/react-reader/files/alice.epub"
            }
            locationChanged={this.onLocationChanged}
            title={"Alice in wonderland"}
            location={location}
            getRendition={this.getRendition}
          />
          <FontSizeButton onClick={this.onToggleFontSize}>
            Toggle font-size
          </FontSizeButton>

          {this.state.fullscreen ? (
            <ExitFullScreenButton onClick={this.toggleFullscreen}>
              Exit FullScreen
            </ExitFullScreenButton>
          ) : (
            <div />
          )}
        </ReaderContainer>
        <div className="reader-buttons">
          <a className="circle-btn--gray" onClick={this.toggleFullscreen}>
            FullScreen{" "}
          </a>
          <a className="circle-btn--gray">Bkmrk </a>

          <a className="circle-btn--gray">Share </a>
          <NavLink to="/videoplayer">
            <a className="circle-btn--video">Watch Video </a>
          </NavLink>
        </div>
      </Container>
    );
  }
}

export default Article;