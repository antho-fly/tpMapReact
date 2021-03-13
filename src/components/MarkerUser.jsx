import React, {useState, useEffect} from "react";
import {Marker, useMap} from "react-leaflet";
import {BrowserRouter as Router,Switch,Route,Redirect,Link} from "react-router-dom";


const MarkerUser = () => {

    
    let position;
    const map = useMap()
    

    useEffect(()=>{ 
       navigator.geolocation.getCurrentPosition(setLatLng);
    },[])

    const setLatLng = (latlng) => { 
        position = [latlng.coords.latitude,latlng.coords.longitude];
        map.flyTo(position, map.getZoom())
    }

    return null;
}


export default MarkerUser;