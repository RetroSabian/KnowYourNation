import React from "react";
import { ComposableMap, ZoomableGlobe, Geographies, Geography} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import Speedy from "../../../Assests/Images/Speedy_Pose_3.png";
import "./Home.scss";

const Map = ({ center }) => (
    <div>
        <img className="speedy" src={Speedy} alt="Speedy Character"></img>
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
                    className = "mapStyles"
                    width={500}
                    height={500}
                    projection="orthographic"
                    projectionConfig={{ scale: 220 }}>
                    <ZoomableGlobe center={[x, y]}>
                        <circle
                            cx={250}
                            cy={250}
                            r={220}
                            fill="#26BAF2" //ocean colour fill
                            stroke = "#000"
                            strokeWidth = "6"
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
                                                strokeWidth: 0.4}, //countries styling specifications
                                            // hover : {fill: "#f258e9"} // TODO: Onhover to be set at a later stage waiting for design
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
