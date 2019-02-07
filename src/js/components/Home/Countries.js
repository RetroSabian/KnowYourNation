import React, {Component} from "react";
import Map from "./Map";
import ReactFlagsSelect from 'react-flags-select';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBiCz9njYP8nYxEUEQLzltCM8kAnm7z6To");

class Mapbuttons extends Component {
    constructor(props) {
        super(props)
        this.state = {center: [0, 0]}
        this.getCountryCode = this.getCountryCode.bind(this);
        this.getCountryName = this.getCountryName.bind(this);
    }

    getCountryName(){
        let x = document.getElementsByClassName("selected--flag--option");
        let countryName = x[0].children[0].innerText;
        this.getCountryCode(countryName);
    }

    getCountryCode(country) {
        console.log(country);
        Geocode.fromAddress(country).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({center: [lng,lat] });
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 col-12 ">
                        <Map center={this.state.center}/>
                    </div>
                    <div className="col-md-3 col-12">
                        {/*DropDown option where country is selected, with configuration */}
                        <ReactFlagsSelect  searchable={true}
                                           defaultCountry= "South Africa"
                                           searchPlaceholder="Know Your Nation"
                                           selectedSize={16}
                                           optionsSize={14}
                                           className="menu-flags"
                                           alignOptions="left"
                                           onSelect={this.getCountryName}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mapbuttons