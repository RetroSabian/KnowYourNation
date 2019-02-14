import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./volunteerEvent.scss";

class volunteerEvent extends Component {

    componentWillMount() {
        fetch('https://localhost:44311/api/volunteer/events')
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    this.projects = data.map((item) => {

                        return (
                            <tr>
                                
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
            <div className="volunteerEvent">
               {this.props.match.params.description}
                <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
                <img src="http://placehold.it/150x150" class="img-responsive center-block"></img>
                <h1> volunteer event</h1>
                <table align="center" width="90%"   >

<tbody >
    
    
</tbody>


</table> 






            </div>
        );
    }
}

export default volunteerEvent;