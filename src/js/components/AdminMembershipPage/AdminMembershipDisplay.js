import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./AdminMembershipDisplay.scss";
import {GetMemberships} from "../../services/apiservice.js";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class AdminMembershipDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newArray:[],
            count:0,
            id: '',
            type: '',
            duration: '',
            price: '',
            description: '',
            allowArticle: '',
            allowAnimation: '',
            allowBook: '',
            allowComic: ''
        };
        this.populateDetails=this.populateDetails.bind(this);
       this.handleClick=this.handleClick.bind(this);
    }

        handleClick() {
             const {newArray}=this.state
                for(var i = 0; i < this.state.posts.length; i++){
                  this.setState({id:this.state.id-1})
                  if(this.state.posts[i].highlighted===true){
                   newArray.push(this.state.posts[i]);
                  }
                }
                fetch('https://api.ereader.retrotest.co.za/api/Memberships')
                .then(res => res.json())
                .then(data => console.log(data.newArray))
           }

           componentWillMount() {
            fetch('https://api.ereader.retrotest.co.za/api/Memberships')
              .then(res => res.json())
              .then(data => {
                this.setState({
                  posts: data.map(users => {
                      users.highlighted = false;
                    return {
                      ...users,
                      highlighted: false, 
                      style:{backgroundColor:'gold'} 
                    };
                  })
                }
                )
              });
              
          }
          populateDetails = event => {
            this.setState({id: this.state.posts[event].id});
            document.getElementById("NameLabel").innerText = this.state.posts[(event)].type;
            document.getElementById("PriceLabel").innerText = this.state.posts[(event)].price;
            document.getElementById("PayLabel").innerText = this.state.posts[(event)].duration;
            if(this.state.posts[event].allowAnimation)
            {
                document.getElementById("AccessLabel1").style.display="inline";
                document.getElementById("AccessLabel1").innerText = "Animations";
            }
            else{
                document.getElementById("AccessLabel1").style.display="none";
            }
            if(this.state.posts[event].allowArticle)
            {
                document.getElementById("AccessLabel2").style.display="inline";
                document.getElementById("AccessLabel2").innerText = "Articles";
            }
            else{
                document.getElementById("AccessLabel2").style.display="none";
            }
            if(this.state.posts[event].allowBook)
            {
                document.getElementById("AccessLabel3").style.display="inline";
                document.getElementById("AccessLabel3").innerText = "Books";
            }
            else{
                document.getElementById("AccessLabel3").style.display="none";
            }
            if(this.state.posts[event].allowComic)
            {
                document.getElementById("AccessLabel4").style.display="inline";
                document.getElementById("AccessLabel4").innerText = "Comics";
            }
            else{
                document.getElementById("AccessLabel4").style.display="none";
            }
         }

    render()
    {
        let loc_navBarTitle = "MEMBERSHIPS";
        let loc_navbarItems = [true, true, true, true];
        return (
            <div className="AdminMembershipDisplay">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                    <div className="row marginTop20px ">
                        {this.state.posts.map((post,index) => (
                        <button key={post.id.toString()}   name="yourBtn" className="entry" onClick={()=>this.populateDetails(index)} value={post.id} onChange={()=>this.onChange(post.id)}>
                            <h5>{post.type}</h5>
                        </button>
                        ))}
                        <NavLink to= "/AdminMembership/new"><button className="reg-circle" onClick={this.handleClick.bind(this)}> +</button></NavLink>
                    </div>
                    <div className="col-12 marginTop20px">
                        <span><label >Name:</label>
                        <label className="label"  name = "NameLabel" id = "NameLabel" type="text" value={this.state.inputValue} onChange={evt => this.updateTypeValue(evt)}/></span>
                    </div>
                    <div className="col-12 marginTop20px">
                        <span><label >Price:</label>
                        <label className="label" name = "PriceLabel" id = "PriceLabel" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Description</h5>
                    </div>
                    <div className="col-12 marginTop5px">
                        <p id = "Descriptionp"></p>   
                    </div>
                    <div className="row marginTop10px ">
                        <span><h5 className="marginLeft20px">Payment Option</h5>
                        <label className="label" name = "PayLabel" id = "PayLabel" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                    </div>  
                    
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Access To</h5>
                        <span className="amd-label"><label className="label" name = "AccessLabel" id = "AccessLabel1" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                        <span className="amd-label"><label className="label" name = "AccessLabe2" id = "AccessLabel2" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                        <span className="amd-label"><label className="label" name = "AccessLabe3" id = "AccessLabel3" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                        <span className="amd-label"><label className="label" name = "AccessLabe4" id = "AccessLabel4" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                    </div>  
                    <div className="col-12 marginTop20px">
                    <button className="reg-circle" onClick= {() => (window.location.href = `adminmembership/${this.state.id}`)}> Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMembershipDisplay;
