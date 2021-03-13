import React, { useContext } from 'react'
import { useMapEvent } from 'react-leaflet';
import MapContext from '../context/MapContext';


const MapClick = () => {
    const{dispatch} = useContext(MapContext);

    useMapEvent(

        'click',(e) => {
            if(navigator.vibrate) navigator.vibrate(200);
            dispatch({type:'addMarker',data:{marker:[e.latlng.lat,e.latlng.lng]} })
        }
            
    )
    return null
}

export default MapClick;