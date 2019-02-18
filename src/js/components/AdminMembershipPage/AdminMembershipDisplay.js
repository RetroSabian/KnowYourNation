import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./AdminMembershipDisplay.scss";
import {GetMemberships} from "../../services/apiservice.js";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as MemberActions from "../../actions/member-action";
//import {LogMember} from "../../actions/member-action";
import Display from "./Display"
import { bindActionCreators } from "redux";

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
            allowComic: '',
            isActive: '',
            edit: false
        };
       this.populateDetails=this.populateDetails.bind(this);
       this.handleClick=this.handleClick.bind(this);
       this.editMembership=this.editMembership.bind(this);
       this.createMembership=this.createMembership.bind(this);
    }

    createMembership(){
      this.props.memberActions.LogMember({
             id: null,
             type: "",
             duration: 0,
             price: 100000,
             description: "",
             allowArticle: false,
             allowAnimation: false,
             allowBook: false,
             allowComic: false,
             isActive: this.state.isActive,
             edit:false
        });
     }

        editMembership(){
          this.props.memberActions.LogMember({
                id: this.state.id,
                type: this.state.type,
                duration: this.state.duration,
                price: this.state.price,
                description: this.state.description,
                allowArticle: this.state.allowArticle,
                allowAnimation: this.state.allowAnimation,
                allowBook: this.state.allowBook,
                allowComic: this.state.allowComic,
                isActive: this.state.isActive,
                edit:true
           });
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

           componentDidMount() {
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
            this.setState({
            id: this.state.posts[event].id,
            type: this.state.posts[(event)].type,
            price:this.state.posts[(event)].price,
            duration:this.state.posts[(event)].duration,
            description:this.state.posts[(event)].description,
            allowAnimation:this.state.posts[(event)].allowAnimation,       
            allowArticle:this.state.posts[(event)].allowArticle,                   
            allowBook:this.state.posts[(event)].allowBook,           
            allowComic:this.state.posts[(event)].allowComic,
            isActive:this.state.posts[(event)].isActive
          });
            this.editMembership();
         }

    render()
    {
        let loc_navBarTitle = "MEMBERSHIPS";
        let loc_navbarItems = [true, true, true, true];
        return (
            <div className="AdminMembershipDisplay">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                    <div className="row">
                        {this.state.posts.map((post,index) => (
                        <button key={post.id.toString()}   name="yourBtn" className="entry" onClick={()=>{
                            this.populateDetails(index);
                        }} value={post.id} onChange={()=>this.onChange(post.id)}>
                            <h5>{post.type}</h5>
                        </button>
                        ))}
                        <NavLink to= "/AdminMembership"><button className="reg-circle" onClick={this.createMembership}>+</button></NavLink>
                    </div>
                    {/* <Display/> */}
                    <div className="col-12 marginTop20px">
                    <NavLink to= '/AdminMembership'><button className="reg-circle" type="button" onClick={this.editMembership}> Edit</button></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
// AdminMembershipDisplay.propTypes = {
// LogMember: PropTypes.func.isRequired
//   };

  const mapDispatchToProps = dispatch => {
    return {
      memberActions: bindActionCreators(MemberActions, dispatch)
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
  
//export default connect(null, mapDispatchToProps) (AdminMembershipDisplay);
export default connect(mapStateToProps, mapDispatchToProps) (AdminMembershipDisplay);


//this.props.memberActions.LogMember(name);

/*import * as MemberActions from '../../actions/member-action';
import { bindActionCreators } from "redux";

component ...

const mapDispatchToProps = dispatch => {
  return {
    memberActions: bindActionCreators(MemberActions, dispatch)
  }
}*/
// const mapDispatchToProps = dispatch => ({
//   LogMember(members){
//   return ()=>{
//   dispatch(LogMember(members));
//   };
//   },
//   });