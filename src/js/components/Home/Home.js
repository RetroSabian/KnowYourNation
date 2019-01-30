import React, { Component } from 'react';
import ArticleApp from "../App";
// import worker from "../../other/workerz";
import MyWorker from '../../other/workerz';

class Home extends Component {
  
  render() {

    var myWorker = new Worker(MyWorker);
    
    myWorker.onmessage = (m) => {
        console.log("msg from worker: ", m.data);
    };
    myWorker.postMessage('im from main');

    return (
      <div className="Home">
      <h4> Home Component </h4>
      <ArticleApp/>
      </div>
    );
  }
}

export default Home;
