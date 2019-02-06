import React, {Component} from "react";
import Map from "./Map";
import './MapStyles.sass'
import ReactFlagsSelect from 'react-flags-select';

// function onSelectFlag(countryCode){             //TODO: Function to be implemented
//     console.log(countryCode)
// }

class Mapbuttons extends Component {
    constructor() {
        super()
        this.state = {center: [0, 0]}
    }
    changeCenter = center => () => {
        this.setState({center})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Map center={this.state.center}/>
                    </div>
                    <div className="col-3">
                        <ReactFlagsSelect  searchable={true}
                                           defaultCountry="US"
                                           searchPlaceholder="Know Your Nation"
                                           selectedSize={18}
                                           optionsSize={20}
                                           className="menu-flags"
                                           alignOptions="left"
                                           onSelect={this.changeCenter([-122.4194, 37.7749])}/>
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