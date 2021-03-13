import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react';
import './Map.css';
import L from 'leaflet';
import MarkerUser from './MarkerUser';



L.Icon.Default.imagePath = 'img/';


const [markers, setMarkers] = useState([]);
setMarker(!prev,e.latlng)

const Map = () => {
  
    return (
      <>
        <MapContainer className="carte" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} onClick="{() => setMarker(!prev,e.latlng)}">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            </Marker>

            <MarkerUser/>
        </MapContainer>
      </>
    );
  };
  
  export default Map;