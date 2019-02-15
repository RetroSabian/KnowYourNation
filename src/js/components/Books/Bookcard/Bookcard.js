import React, { Component } from 'react';

import './Bookcard.scss';

class  Bookcard extends Component {
  render() {
    return (
     <div className="Bookcard borderYellow col-12">
       <div className="row bookcardImage ">
            <p>Book Name</p>
        </div>
        <div className="row bookcardAccessory">
            <div className="col-8 fontsize8px noPaddMar">
                    
                <div className="row">
                    <div className="noPaddMar">
                        Book Name
                    </div>
                    <div className="noPaddMar">
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
    );
  }
}

export default Bookcard;
