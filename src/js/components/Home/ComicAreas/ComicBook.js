import React from 'react';
import './ComicBook.scss';
import Speedy from '../../../../Images/Speedy_Pose_3.png'
import Book from '../../../../Images/book.png'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class CharacterWindow1 extends React.Component {
    constructor(){
        super()
    }
    render() {
        const displayInfo = () => {
            console.log('display info');
        }
        return (
            <div className="container-fluid character-page">
                <div className="row"><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    <div className="row char-window">
                        <div className="col-md-10 offset-md-1">
                            <img className="character" src={Speedy} alt="Smiley face" onClick={() => displayInfo()}></img>
                            <NavLink to="/books"><img className="book" src={Book} alt="Cartoon Book"></img></NavLink>
                        </div>
                    </div>
                <div className="row"><br/><br/><br/><br/><br/></div>
            </div>
        );
    }
}
export default CharacterWindow1;