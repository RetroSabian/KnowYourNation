import React, { Component } from 'react';

import './Bookcard.sass';

class  Bookcard extends Component {
  render() {
    return (
    <div className="Bookcard ">
        <div className="bookcardImage borderYellow ">
            Book Name
        </div>
        <div className="container-fluid  bookcardAccessory borderYellow ">
            <div className="row ">
                <div className="col-8  fontsize8px noPaddMar">
                    Book Name
                </div>
                <div className="col-4 fontsize8px  height100">
                    <i className="far fa-bookmark"></i>
                </div>
                <div className="col-8  noPaddMar">
                    <i className="far fontsize10px fa-star"></i>
                    <i className="far fontsize10px fa-star"></i>
                    <i className="far fontsize10px fa-star"></i>
                    <i className="far fontsize10px fa-star"></i>
                    <i className="far fontsize10px fa-star"></i>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Bookcard;
