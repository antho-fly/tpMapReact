import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import React, { useState, useContext, useEffect } from 'react';
import './Map.css';
import L from 'leaflet';
import MarkerUser from './MarkerUser';
import MapContext from '../context/MapContext';
import MapClick from './MapClick';



L.Icon.Default.imagePath = 'img/';


const Map = () => {

  const { state,dispatch } = useContext(MapContext)




    return (
      <>
        <MapContainer className="carte" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

             {state.markers.map(marker =>
              <Marker key={marker.id} position={marker.coords}>
              </Marker>
              )}
            <MarkerUser/>
            <MapClick/>
        </MapContainer>
      </>
    );
  };
  
  export default Map;