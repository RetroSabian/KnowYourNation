import React from "react";
import {
    ComposableMap,
    ZoomableGlobe,
    Geographies,
    Geography
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

const mapStyles = {
    width: "100%",       // Where the globe width size on the page is set.
    height: "auto",
    outline: "#888888"
};

const Map = ({ center }) => (
    <div>
        <Motion
            defaultStyle={{
                x: center[0],
                y: center[1]
            }}
            style={{
                x: spring(center[0]),
                y: spring(center[1])
            }}>
            {({ x, y }) => (
                <ComposableMap
                    width={500}
                    height={500}
                    projection="orthographic"
                    projectionConfig={{ scale: 220 }}
                    style={mapStyles}>
                    <ZoomableGlobe center={[x, y]}>
                        <circle
                            cx={250}
                            cy={250}
                            r={220}
                            fill="#26BAF2"
                            stroke = "#000"
                            strokeWidth = "6"//ocean colour fill
                            // outline-color="#FFFFFF" need to make a border around globe.
                        />
                        <Geographies
                            disableOptimization
                            geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
                        >
                            {(geos, proj) =>
                                geos.map((geo, i) => (
                                    <Geography
                                        key={geo.id + i}
                                        geography={geo}
                                        projection={proj}
                                        style={{
                                            default: { fill: "#9BC214",
                                                stroke: "#000",
                                                strokeWidth: 0.5} //country colour fills
                                        }}
                                    />
                                ))
                            }
                        </Geographies>
                    </ZoomableGlobe>
                </ComposableMap>
            )}
        </Motion>
    </div>
);

export default Map;
