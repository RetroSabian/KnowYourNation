import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {LogMember} from "../../actions/member-action";
import { bindActionCreators } from "redux";
import * as MemberActions from "../../actions/member-action";
class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            type: '',
            duration: '',
            price: '',
            description: '',
            allowArticle: '',
            allowAnimation: '',
            allowBook: '',
            allowComic: '',
            isActive: '',
            edit: false
        };
        this.showAnimation=this.showAnimation.bind(this);
    }
    
    showAnimation(){
        if(this.props.allowAnimation){
            return "Animation";
        }
        else
        return "";
    }
    componentWillReceiveProps(){
        
    }

    render(){
        return(
        <div className="container ">
            <div className="row">
                <div className="col-12 marginTop20px">
                    <span><label >Name:</label>
                    <label className="label"  name = "NameLabel" id = "NameLabel" type="text"> {this.props.type}</label>  </span>
                </div>
                <div className="col-12 marginTop20px">
                    <span><label >Price:</label>
                    <label className="label" name = "PriceLabel" id = "PriceLabel" type="text">{this.props.price}</label></span>
                </div>
                <div className="row marginTop10px ">
                    <h5 className="marginLeft20px">Description</h5>
                </div>
                <div className="col-12 marginTop5px">
                    <p id = "Descriptionp">{this.props.description}</p>   
                </div>
                <div className="row marginTop10px ">
                    <span><h5 className="marginLeft20px">Payment Option</h5>
                    <label className="label" name = "PayLabel" id = "PayLabel" type="text">{this.props.duration}</label></span>
                </div>  
                <div className="row marginTop10px ">
                    <h5 className="marginLeft20px">Access To</h5>
                    <span className="amd-label"><label className="label" name = "AccessLabel" id = "AccessLabel1" type="text"></label></span>
                    <span className="amd-label"><label className="label" name = "AccessLabe2" id = "AccessLabel2" type="text"></label></span>
                    <span className="amd-label"><label className="label" name = "AccessLabe3" id = "AccessLabel3" type="text"></label></span>
                    <span className="amd-label"><label className="label" name = "AccessLabe4" id = "AccessLabel4" type="text"></label></span>
                </div>  
                <div className="row marginTop10px ">
                    <h5 className="marginLeft20px">Is Active</h5>
                    <span className="amd-label"><label className="label" name = "ActiveLabel" id = "ActiveLabel" type="text">{this.props.isActive}</label></span>
                </div>  
            </div> 
        </div> 
        );
    }
}

const mapStateToProps = (state) => ({
id: state.member.members.id,
type: state.member.members.type,
duration: state.member.members.duration,
price: state.member.members.price,
description: state.member.members.description,
allowArticle: state.member.members.allowArticle,
allowAnimation: state.member.members.allowAnimation,
allowBook: state.member.members.allowBook,
allowComic: state.member.members.allowBook,
isActive: state.member.members.isActive,
edit: state.member.members.edit
})
const mapDispatchToProps = dispatch => {
    return {
      memberActions: bindActionCreators(MemberActions, dispatch)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Display);
