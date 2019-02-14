import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./volunteer.scss";

class Volunteer extends Component {




    componentWillMount() {
        fetch('https://localhost:44311/api/volunteer/events')
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    this.projects = data.map((item) => {


                        return (
                            <tr>
                                  <NavLink to={`/volunteerEvent/${item.id}`} ><button   type="button" class="btn btn-secondary btn-lg btn-block btn-volunteer-title" >{item.name}</button></NavLink>  
                            </tr>
                        )
                    })
                    this.setState({
                        projects: this.projects
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
            <div className="volunteer">
                <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
                <img src="http://placehold.it/150x150" class="img-responsive center-block"></img>
                <h1> volunteer</h1>
                <p>Speedy's longs suffering wife, Miriam is a solid, livel-handed partner to her fun-loving husband</p>
                <table align="center" width="90%"   >

                    <tbody >
                        {this.projects}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Volunteer;