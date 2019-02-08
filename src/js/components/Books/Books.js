import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Bookcard from '../Books/Bookcard/Bookcard';

import './Book.scss';
class  Books extends Component {
  render() {
    var loc_navBarTitle  = "BOOKS";
    var loc_navbarItems = [true,true,true,true];

    return (
      <div className="Books">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <br/>
        <div className="container ">
            <div className="row">
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>           
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>           
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>           
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>           
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>           
                <div className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard/></div>                    
            </div>
        </div>
      </div>
    );
  }
}

export default Books;
