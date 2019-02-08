import React, { Component } from 'react';

import './Bookcard.scss';

class  Bookcard extends Component {
  render() {
    return (
    <div className="Bookcard ">
        <div className="bookcardImage borderYellow">
            Book Name
        </div>
        <div className="container-fluid bookcardAccessory borderYellow ">
            <div className="row ">
                <div className="col-8 fontsize8px noPaddMar">
                    
                    <div className="row">
                        <div className="col-12 noPaddMar">
                            Book Name
                        </div>
                        <div className="col-12 noPaddMar">
                            <i className="far fontsize10px fa-star"></i>
                            <i className="far fontsize10px fa-star"></i>
                            <i className="far fontsize10px fa-star"></i>
                            <i className="far fontsize10px fa-star"></i>
                            <i className="far fontsize10px fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4 fontsize14px height100">
                    <i className="far fa-bookmark"></i>
                </div>

            </div>
        </div>
    </div>
    );
  }
}

export default Bookcard;
