import React from 'react';
import './ComicBook.scss';
import Speedy from '../../../../Assests/Images/Speedy_Pose_3.png'
import Book from '../../../../Assests/Images/book.png'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import {Animated} from "react-animated-css";

class CharacterWindow1 extends React.Component {
    constructor(){
        super()
        this.state = {
            displayInfo: false,
            charDiv: 'col-md-7 offset-md-1 col-7',
            itemDiv: 'col-md-4 col-5 item-info',
            infoDiv: 'd-none char-info'
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
        }
        else
        {
            this.setState({itemDiv:"col-md-4 col-5 item-info"});
            this.setState({infoDiv:"d-none char-info"});
        }
    }
    render() {

        return (
            <div className="container-fluid character-page">
                {/*<div className="row"><br/><br/><br/><br/><br/><br/><br/><br/></div>*/}
                {/*<div className="space-above"></div>*/}
                <div className="row char-window">
                        <div className={this.state.charDiv }>
                            <div className="row space-above"></div>
                            <img className="character" src={Speedy} alt="Smiley face" onClick={this.showInfo}></img>
                            <div className="row space-below"></div>
                        </div>

                        <div className={this.state.itemDiv} >
                            {/*<Animated nimationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={!this.state.displayInfo}>*/}
                                <NavLink to="/books">
                                    <img className="book" src={Book} alt="Cartoon Book"></img>
                                </NavLink>
                            {/*</Animated>*/}
                        </div>

                        <div className={this.state.infoDiv}>
                            <Animated animationIn="fadeInRight" animationOut="fadeOutRight" isVisible={this.state.displayInfo}>
                                <div>
                                    <h3>Speedy</h3>
                                    <h6>Speedy is a
                                    hard-working
                                    resident of Happy
                                    Township, a
                                    township in South
                                    Africa</h6>
                                    <h6>Speedy is full of
                                    fun and good
                                    humour, and
                                    enjoys soccer, his
                                    wife's cooking, and
                                    more soccer.</h6>
                                </div>
                            {/*<img className="character" src={Speedy} alt="Smiley face" onClick={this.showInfo}>*/}
                            {/*</img>*/}
                            </Animated>
                        </div>
                </div>

                {/*<div className="row"><br/><br/><br/><br/><br/></div>*/}
            </div>
        );
    }
}
export default CharacterWindow1;