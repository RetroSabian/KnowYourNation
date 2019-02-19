import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./volunteerEvent.scss";

class volunteerEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    componentWillMount() {
        fetch(`https://localhost:44311/api/Volunteer/getevents?id=${this.props.match.params.id}`)
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    this.setState({
                        data
                    })
                },
                (error) => {
                    console.log(error);
                });
    }
    render() {

        let navBarTitle = "Volunteering";
        let navbarItems = [true, false, false, true];

        return (
            !this.state.data ? <p>Loading ...</p> : 
            <div className="volunteerEvent">
               {/*this.props.match.params.description*/}
                <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
                <img src="http://placehold.it/150x150" class="img-responsive center-block"></img>
                <h1> volunteer event</h1>
                <p>{this.state.data.description}</p>
                
       
                <table    >
                    <tbody >
                        <tr>
                        <td >

                            <p>{this.state.data.postalcode}</p>
                            <p>{this.state.data.suburb} , {this.state.data.city}, {this.state.data.street} </p>
                           <p> {this.state.data.postalCode}</p>
                            <p>{this.state.data.date}</p>
                       
                        </td>
                       
                        </tr>
                        <tr> <button   type="button" class="btn btn-secondary  btn-volunteer-title" >Volunteer</button>  </tr>
                    </tbody>
                </table> 
                
            </div>
        );
    }
}

export default volunteerEvent;