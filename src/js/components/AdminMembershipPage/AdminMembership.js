import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./AdminMembership.scss";
import {CreateMembership} from "../../services/apiservice.js";
import {EditMembership} from "../../services/apiservice.js";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import {LogMember} from "../../actions/member-action";

class AdminMembership extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            type: this.props.type,
            duration: 0,
            price: 0,
            description: '',
            allowArticle: false,
            allowAnimation: false,
            allowBook: false,
            allowComic: false,
            isActive: false,
            edit: false
        };
    }

        updateTypeValue(evt) {
            this.setState({type: evt.target.value});
            console.log(evt.target.value);
        }
        updateDurationValue(evt) {
            this.setState({duration: parseInt(evt.target.value)});
        }
        updatePriceValue(evt) {
            this.setState({price: parseInt(evt.target.value)});
        }
        updateAllowAnimationsValue(evt) {
            if(this.state.allowAnimation === false){
                this.setState({allowAnimation: true});
            }
            else{
                this.setState({allowAnimation: false});
            }
        }
        updateAllowArticlesValue(evt) {
            if(this.state.allowArticle === false){
                this.setState({allowArticle: true});
            }
            else{
                this.setState({allowArticle: false});
            }
        }
        updateAllowBooksValue(evt) {
            if(this.state.allowBook === false){
                this.setState({allowBook: true});
            }
            else{
                this.setState({allowBook: false});
            }
        }
        updateAllowComicsValue(evt) {
            if(this.state.allowComic === false){
                this.setState({allowComic: true});
            }
            else{
                this.setState({allowComic: false});
            }
        }
        updateIsActiveValue(evt) {
            if(this.state.isActive === false){
                this.setState({isActive: true});
            }
            else{
                this.setState({isActive: false});
            }
        }
        updateValue = event => {
            this.setState({duration: event.target.value});
        }
        updateDescriptionValue(evt){
            this.setState({description: evt.target.value});
        }

        handleClick() {
            if(this.props.edit === true){
                EditMembership(this.id,this.state.type, this.state.duration, this.state.price, this.state.description, this.state.allowAnimation, this.state.allowArticle, this.state.allowBook, this.state.allowComicm, this.state.isActive);
            }
            else{
                CreateMembership(this.state.type, this.state.duration, this.state.price, this.state.description, this.state.allowAnimation, this.state.allowArticle, this.state.allowBook, this.state.allowComic, this.state.isActive);
            }
        }

    render()
    {
        let loc_navBarTitle = "EDIT MEMEMBERSHIP";
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
                        <span><input className="formInput" id="NameInput"type="text" value={this.setState.type} onChange={evt => this.updateTypeValue(evt)}/></span>
                    </div>
                    <div className="col-12 marginTop20px">
                        <label >Price:</label>
                        <span><input className="formInput" type="text" pattern="[0-9]*" value={this.props.price} onChange={evt => this.updatePriceValue(evt)}/></span>
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Description:</h5>
                    </div>
                    <div className="col-12 marginTop5px">
                    <textarea rows="4" cols="50" value = {this.props.description} onChange={evt => this.updateDescriptionValue(evt)}>
                    </textarea>   
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Payment Option:</h5>
                    </div>  
                    <div className="col-12 marginTop10px">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="Payradio" value={100000}  onChange={this.updateValue} checked={this.props.duration===100000}/>Once-Off
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="Payradio" value={31} onChange={this.updateValue} checked={this.props.duration===31}/>Monthly
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="Payradio" value={365} onChange={this.updateValue} checked={this.props.duration===365}/>Yearly
                            </label>
                        </div>
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Access To:</h5>
                    </div>  
                    <div className="col-12 marginTop10px">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="Accessradio" checked={this.props.allowComic} onChange={evt => this.updateAllowComicsValue(evt)}/>Comics
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="Accessradio" checked={this.props.allowAnimation} onChange={evt => this.updateAllowAnimationsValue(evt)}/>Animations
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="Accessradio" checked={this.props.allowBook} onChange={evt => this.updateAllowBooksValue(evt)}/>Books
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="Accessradio" checked={this.props.allowArticle} onChange={evt => this.updateAllowArticlesValue(evt)}/>Articles
                            </label>
                        </div>            
                    </div>
                    <div className="row marginTop10px ">
                        <h5 className="marginLeft20px">Is Active:</h5>
                    </div>  
                    <div className="col-12 marginTop10px">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="Activeradio"   onChange={evt => this.updateIsActiveValue(evt)}/>Activate
                            </label>
                        </div>
                    </div>
                    <div className="col-12 marginTop20px">
                        <NavLink to= "/AdminMembershipDisplay"><button className="reg-circle" onClick={this.handleClick.bind(this)}> Save</button></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    id: state.member.id,
    type: state.member.type,
    duration: state.member.duration,
    price: state.member.price,
    description: state.member.description,
    allowArticle: state.member.allowArticle,
    allowAnimation: state.member.allowAnimation,
    allowBook: state.member.allowBook,
    allowComic: state.member.allowBook,
    isActive: state.member.isActive,
    edit: state.member.edit
    })
    

export default connect(mapStateToProps,{LogMember}) (AdminMembership);
