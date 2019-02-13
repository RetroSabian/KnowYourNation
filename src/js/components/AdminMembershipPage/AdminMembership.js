import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./AdminMembership.scss";
import {CreateEditMembership} from "../../services/apiservice.js";

class AdminMembership extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membershipType: '',
            membershipDuration: '',
            membershipPrice: '',
            description: '',
            allowArticles: '',
            allowAnimations: '',
            allowBooks: '',
            allowComics: ''
        };
    }

        updateTypeValue(evt) {
            this.setState({membershipType: evt.target.value});
        }
    
        updateDurationValue(evt) {
            this.setState({membershipDuration: evt.target.value});
        }
    
        updatePriceValue(evt) {
            this.setState({membershipPrice: evt.target.value});
        }

        updateAllowAnimationsValue(evt) {
            this.setState({allowAnimations: evt.target.value});
        }

        updateAllowArticlesValue(evt) {
            this.setState({allowArticles: evt.target.value});
        }

        updateAllowBooksValue(evt) {
            this.setState({allowBooks: evt.target.value});
        }

        updateAllowComicsValue(evt) {
            this.setState({allowComics: evt.target.value});
        }

        updateOnceOffValue(evt){
            this.setState({membershipDuration: "Once-Off"});
        }

        updateMonthlyValue(evt){
            this.setState({membershipDuration: "Monthly"});
        }

        updateYearlyValue(evt){
            this.setState({membershipDuration: "Yearly"});
        }

        updateDescriptionValue(evt){
            this.setState({description: evt.target.value});
        }

        handleClick() {
           CreateEditMembership(this.state.membershipType, this.state.membershipDuration, this.state.membershipPrice, this.state.description, this.state.allowAnimations, this.state.allowArticles, this.state.allowBooks, this.state.allowComics)
        }

    render()
    {
        let loc_navBarTitle = "BACK";
        let loc_navbarItems = [true, true, true, true];

        return (
            <div className="AdminMembership">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                    <div className="row marginTop20px ">
                            <h3 className="marginLeft20px">Create/Edit Membership Type</h3>
                    </div>
                    <div className="col-12 marginTop20px">
                        <label >Name:</label>
                        <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updateTypeValue(evt)}/></span>
                    </div>
                    <div className="col-12 marginTop20px">
                        <label >Price: R</label>
                        <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updatePriceValue(evt)}/></span>
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Description</h5>
                    </div>
                    <div className="col-12 marginTop5px">
                    <textarea rows="4" cols="50" value = {this.state.inputValue} onChange={evt => this.updateDescriptionValue(evt)}>
                    </textarea>   
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Payment Option</h5>
                    </div>  
                    <div className="col-12 marginTop10px">
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="Payradio" value={this.state.inputValue} onChange={evt => this.updateOnceOffValue(evt)}/>Once-Off
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="Payradio" value={this.state.inputValue} onChange={evt => this.updateMonthlyValue(evt)}/>Monthly
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="Payradio" value={this.state.inputValue} onChange={evt => this.updateYearlyValue(evt)}/>Yearly
                            </label>
                        </div>
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Access To</h5>
                    </div>  
                    <div className="col-12 marginTop10px">
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="Accessradio" value={this.state.inputValue} onChange={evt => this.updateAllowComicsValue(evt)}/>Comics
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="Accessradio" value={this.state.inputValue} onChange={evt => this.updateAllowAnimationsValue(evt)}/>Animations
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="Accessradio" value={this.state.inputValue} onChange={evt => this.updateAllowBooksValue(evt)}/>Books
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="Accessradio" value={this.state.inputValue} onChange={evt => this.updateAllowArticlesValue(evt)}/>Articles
                            </label>
                        </div>            
                    </div>
                    <div className="col-12 marginTop20px">
                    <button className="reg-circle" onClick={this.handleClick.bind(this)}> Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMembership;
