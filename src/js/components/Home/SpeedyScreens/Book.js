import React, { Component } from 'react';
import './BookScreen.scss';
import Speedy from '../../../../Assests/Images/Speedy_Pose_3.png'
import Book from '../../../../Assests/Images/book.png'
import { NavLink } from "react-router-dom";
import {Animated} from "react-animated-css";

class CharacterWindow1 extends Component {
    constructor(){
        super()
        this.state = {
            displayInfo: false,
            charDiv: 'col-md-7 offset-md-1 col-6',
            itemDiv: 'col-md-4 col-5 item-info',
            infoDiv: 'd-none char-info',
            btnDiv: 'd-none'
        }
        this.showInfo = this.showInfo.bind(this);
    }
    showInfo () {
        console.log('display info');
        console.log(this.state.itemDiv);
        this.setState({displayInfo:!this.state.displayInfo});
        if(this.state.itemDiv === "col-md-4 col-5 item-info")
        {
            this.setState({itemDiv:"d-none item-info"});
            this.setState({infoDiv:"col-md-4 col-5 char-info"});
            this.setState({btnDiv:"col-1 btn-col"});
        }
        else
        {
            this.setState({itemDiv:"col-md-4 col-5 item-info"});
            this.setState({infoDiv:"d-none char-info"});
            this.setState({btnDiv:"d-none"});
        }
    }
    render() {
        let charDescOne= "Speedy is a hard-working resident of Happy Township, a township in South Africa";
        let charDescTwo = "Speedy is full of fun and good humour, and enjoys soccer, his wife's cooking, and more soccer.";
        return (
            <div className="container-fluid character-page">
                <div className="row char-window">
                    <div className={this.state.charDiv }>
                        <img className="character" src={Speedy} alt="Smiley face" onClick={this.showInfo}></img>
                    </div>
                    <div className={this.state.itemDiv} >
                            <NavLink to="/books">
                                <img className="book" src={Book} alt="Cartoon Book"></img>
                            </NavLink>
                    </div>
                    <div className={this.state.btnDiv}>
                        <button className="btnCollapse">
                            <i className="fas fa-angle-right fa-2x" onClick={this.showInfo}></i>
                        </button>
                    </div>
                    <div className={this.state.infoDiv}>
                        <Animated animationIn="fadeInRight" animationOut="fadeOutRight" isVisible={this.state.displayInfo}>
                            <div>
                                <h3>Speedy</h3>
                                <h6>{charDescOne}</h6>
                                <h6>{charDescTwo}</h6>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}
export default CharacterWindow1;