import React, {Component} from "react";
import Map from "./Map";
import ReactFlagsSelect from 'react-flags-select';
import  countries from 'react-flags-select/es/countries';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBiCz9njYP8nYxEUEQLzltCM8kAnm7z6To");

class Mapbuttons extends Component {
    constructor() {
        super()
        this.state = {
            center: [0, 0],
            countryName: 'South Africa'
        }
        this.getCountryCode = this.getCountryCode.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }

    setCountry(countryCode) {
        this.getCountryCode( countries[countryCode]);
    }

    getCountryCode(country) {
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
                    <div className="col-md-9 col-12">
                        <Map center={this.state.center}/>
                    </div>
                    <div className="col-md-2 col-12">
                        {/*DropDown option where country is selected, with configuration */}
                        <ReactFlagsSelect  searchable={true}
                                           defaultCountry= "South Africa"
                                           searchPlaceholder="Know Your Nation"
                                           selectedSize={16}
                                           optionsSize={14}
                                           className="menu-flags"
                                           alignOptions="right"
                                           onSelect={this.setCountry}/>
                    </div>
                    <div className="col-md-1"/>
                </div>
            </div>
        )
    }
}

export default Mapbuttons