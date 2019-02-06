import React, {Component} from "react";
import Map from "./Map";
import './MapStyles.sass'
import ReactFlagsSelect from 'react-flags-select';
import Geocode from "react-geocode";

// function onSelectFlag(countryCode){             //TODO: Function to be implemented
//     console.log(countryCode)
// }
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBiCz9njYP8nYxEUEQLzltCM8kAnm7z6To");

class Mapbuttons extends Component {
    constructor() {
        super()
        this.state = {center: [0, 0]}
        this.getCountryCode = this.getCountryCode.bind(this);
    }
    // changeCenter(center) {
    //     this.setState({center})
    // }

    getCountryCode(country) {
        console.log(country);
        Geocode.fromAddress(country).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                 this.setState({center: [lat,lng] });
                 console.log(lat);
                 console.log(lng);
                 console.log(this.state.center[0]);
                // this.changeCenter([lat, lng])
            },
            error => {
                console.error(error);
            }
        );
    }

    // onSelectFlag(countryCode){
    //     console.log(countryCode)
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Map center={this.state.center}/>
                    </div>
                    {/*<button onClick={()=>this.test("South Africa")}>press</button>*/}
                    <div className="col-3">
                        <ReactFlagsSelect  searchable={true}
                                           defaultCountry="ZA"
                                           searchPlaceholder="Know Your Nation"
                                           selectedSize={18}
                                           optionsSize={20}
                                           className="menu-flags"
                                           alignOptions="left"
                                           onSelect={this.getCountryCode}/>
                                           {/*this.changeCenter([-122.4194, 37.7749])*/}

                        {/*<button*/}
                        {/*className="btn"*/}
                        {/*onClick={this.changeCenter([151.2093, -33.8688])}*/}
                        {/*>*/}
                        {/*{"Sydney"}*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Mapbuttons