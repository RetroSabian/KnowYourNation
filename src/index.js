import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';
import Map from "./js/components/Home/Map";
import './js/components/Home/Map.sass';

class Apps extends Component {
    constructor() {
        super()
        this.state = { center: [0, 0] }
    }
    changeCenter = center => () => {
        this.setState({ center })
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {/*style={{ padding: "1rem 0" }}*/}
                <div >
                    <button
                        className="btn"
                        onClick={this.changeCenter([-122.4194, 37.7749])}
                    >
                        {"San Francisco"}
                    </button>
                    <button
                        className="btn"
                        onClick={this.changeCenter([151.2093, -33.8688])}
                    >
                        {"Sydney"}
                    </button>
                </div>
                <Map center={this.state.center} />
            </div>
        )
    }
}
render(
    <Provider store={store}>
        <App />,
        <Apps />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);