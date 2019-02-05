import React, { Component } from 'react';
import ArticleApp from "../App";
import MyWorker from "../../other/workerz";
import {Switch} from "react-router-dom";
import Mapbuttons from "./Countries"
import Map from "./Map";

class Home extends Component {
  constructor() {
    super()
    this.state = { center: [0, 0] }
    }
    changeCenter = center => () => {
      this.setState({ center })
    }
  render() {

    var myWorker = new Worker(MyWorker);
    
    myWorker.onmessage = (m) => {
        console.log("msg from worker: ", m.data);
    };
    myWorker.postMessage('im from main');

    return (
      <div className="Home">
        <h2></h2>
      <h4> Insert speedy picture here </h4>
        <Mapbuttons />
        {/*<Map center={this.state.center} />*/}
      {/*<ArticleApp/>*/}
      </div>
    );
  }
}

export default Home;
