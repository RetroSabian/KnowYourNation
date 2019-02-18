
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
class donation extends Component {
  constructor(props){
    super(props);
    this.state ={
      "cardNumber": "",
      "nameonCard": "",
      "expirationDate": "",
      "cvc": "",
      "country": "",
      "state": "",
      "city": "",
      "postal": "",
      "email": "",
    }
    
   // this.onChange=this.onChange.bind(this);
    //this.onSubmit=this.onSubmit.bind(this);
  }

  Payment(){

    const RequestObject = {
      "cardNumber": this.state.cardNumber,
      "nameonCard": this.state.nameonCard,
      "expirationDate": this.state.expirationDate,
      "cvc": this.state.cvc,
      "country": this.state.country,
      "state": this.state.state,
      "city": this.state.city,
      "postal": this.state.emailValue,
      "email": this.state.email,
    }
    fetch("https://localhost:44311/api/PayPal", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(RequestObject)
    }).then(function(response) {
      return response.json();
    }).catch(function(data) {
    });

  }

  render() {
    return (
      
      <div className="App"> 
                <div>
                 
                     <form>
                     <h>Donation details</h><br/>
                          Amount &nbsp;<input type="text" name="Amount" placeholder="R50.00"/><br/>

                         
                          <p><b>Organisation</b><br/> Please choose your organisation of choice</p>

                        <br/>
                          Organisation Name &nbsp;<input type="checkbox" name="SecondOrganisation" size="50%" />&nbsp;
                          <navItem>
                                <NavLink to="/register" ><button>view more</button></NavLink>
                          </navItem><br/><br/>
                          Organisation Name &nbsp;<input type="checkbox" name="SecondOrganisation" size="50%" />&nbsp;
                          <navItem>
                                <NavLink to="/register" ><button>view more</button></NavLink>
                          </navItem>
                     </form>
                     
                     
                      <form>
                      <h>Payments</h><br/>
                     Credit card number&nbsp;<input type="number" name="card number" placeholder="1234567890"/><br/><br/>
                     Expiration date&nbsp;<input type="date" name="ExpDate" placeholder="1234567890"/><br/><br/>
                     Security code&nbsp;<input type="password" name="SecurityCode" placeholder="****"/><br/><br/>
                     <nav>
                          <navItem>
                                <NavLink to="/donationSuccess" ><button>click me for payment</button></NavLink>
                          </navItem><hr />
                      </nav> 

                      </form>

                      

                </div>
      </div>
      

        
    );
  }
}

export default donation;
{/* <form>
<FormGroup controlId="CardNumber"  >
          <label>Card Number</label>
          <input type="text" name="cardNumber" id="us" placeholder="Card number" />

</FormGroup>
<FormGroup controlId="nameonCard"  >
          <label>Nameoncard</label>
          <input type="text" name="nameonCard" id="us" placeholder="Name on Card" />

</FormGroup>
<FormGroup controlId="nameonCardID"  >
          <label>Experation Date</label>
          <input type="text" name="expirationDate" id="us" placeholder="Expiration Date" />

</FormGroup>
<FormGroup controlId="cvcID"  >
          <label>CVC</label>
          <input type="text" name="cvc" id="us" placeholder="CVC" />

</FormGroup>
<FormGroup controlId="Country">
          <label>Country</label>
          <input name="country" name="cvc" id="us" placeholder="Country " />

</FormGroup>
<FormGroup controlId="State">
          <label>State</label>
          <input name="state" type="text" id="us" placeholder="State" />

</FormGroup>
<FormGroup controlId="City">
          <label>city</label>
          <input  name="city" type="text" id="us" placeholder="City" />

</FormGroup>
<FormGroup controlId="Postal">
          <label>Postal</label>
          <input type="text" name="postal" id="us" placeholder="Postal" />

</FormGroup>
<FormGroup controlId="Email">
          <label>Email</label>
          <input type="text" name="email" id="us" placeholder="name@mail.com" />

</FormGroup>
<Button onClick={this.Payment}  >Submit</Button>
</form> */}
