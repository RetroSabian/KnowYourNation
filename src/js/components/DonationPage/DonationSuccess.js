
import React, { Component } from "react";

import renderHTML from 'react-render-html';
import { Container, Col,FormGroup, Label, Input, Button, Form} from 'reactstrap';
//import { validatePassword, validateEmail, validateUsername } from './Validators.js';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
/*  <form>
Amount : <input type="text"  id="AmountID" /><br/>
Organisation : <input type="checkbox" id="Org_One"  /><Button variant="secondary"> View more </Button><br/>
Organisation : <input type="checkbox" id="Org_One"  /><Button variant="secondary">View more </Button><br/>
</form>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<label>Payment </label>
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="WR3NGAATKPUWS" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_ZA/i/scr/pixel.gif" width="1" height="1" />
</form> 
*/
class donationSuccess extends Component {
 
   
  render() {
    return (
      
      <div className="App"> 
                <div>
                 
               
                     <h>Thank you</h><br/>
                         
                    

                     <button type="submit"  variant="primary">Browse Books</button><br/><button type="submit"  variant="primary">Share</button>
                   
                </div>
      </div>
      

        
    );
  }
}

export default donationSuccess;