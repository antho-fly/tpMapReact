import React, {useState} from "react";
import {Marker, useMapEvents} from "react-leaflet";
import {BrowserRouter as Router,Switch,Route,Redirect,Link} from "react-router-dom";


const MarkerUser = () => {

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        }
    })

    return position == null ?
        null
        : 
        (
            <Marker position={position}>
            </Marker>
        )
}


export default MarkerUser;