import React, { Component } from "react";
import Bookcard from "../Books/Bookcard/Bookcard";
import Navbar from "../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyle // Styles for the epub-reader it you need to customize it
} from "react-reader";

import "../Articles/ArticleReader.sass";

class Article extends Component {
  render() {
    var navBarTitle = "Article Name";
    var navbarItems = [true, true, true, true];

    return (
      <div style={{ position: "relative", height: "100%" }}>
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
        {/* The ReactReader will expand to 100% of width/height, so be sure to set a
         height on the parent element, either with position it absolute of window,
         set height or use paddingTop for proporsjonal scaling */}

        <ReactReader
          url={"https://gerhardsletten.github.io/react-reader/files/alice.epub"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={epubcifi => console.log(epubcifi)}
          tocChanged={toc => console.log(toc)}
        />

        <ButtonGroup className="Btn">
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Article;
