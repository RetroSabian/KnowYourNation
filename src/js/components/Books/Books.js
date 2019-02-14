import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Bookcard from '../Books/Bookcard/Bookcard';

import './Book.scss';
class  Books extends Component {
  render() {
    let loc_navBarTitle  = "BOOKS";
      let loc_navbarItems = [true,true,true,true];
      let rows = [];
      for (let i = 0; i < 5; i++) {
          rows.push(<div key={i} className="col-4 col-sm-3 col-md-2 noPaddMar"><Bookcard /></div> )
      }
    return (
      <div className="Books">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <br/>
        <div className="container ">
                <div className="row noPaddMar">
                    {rows}         
            </div>
        </div>
      </div>
    );
  }
}

export default Books;
