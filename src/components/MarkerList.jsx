import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import React, { useState, useContext, useEffect } from 'react';
import MapContext from '../context/MapContext';
import './markerList.css'



const MarkerList = () => {

  const { state,dispatch } = useContext(MapContext)



    return (
      <>
        {state.markers.map(marker =>
              <div className="marker">
                  <p>Marqueur n°{marker.id}</p>
                  <p>Coordonnées: {marker.coords[0]},{marker.coords[1]}</p>
                  <button className="bouton" onClick={() => {dispatch({type:'deleteMarker', data:{id:marker.id} })}}>Supprimer</button>
                </div>
        )}
      </>
    );
  };
  
  export default MarkerList;