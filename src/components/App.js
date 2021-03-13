import React, { useReducer,useContext } from 'react';
import './App.css';
import Map from './Map.jsx'
import MarkerList from './MarkerList';
import 'leaflet/dist/leaflet.css';
import mapReducer from '../reducer/mapReducer'
import MapContext from '../context/MapContext'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




function App() {

    const [state, dispatch] = useReducer(mapReducer,{markers:[]});

    const context = {state,dispatch};

  return (

    <MapContext.Provider value={context}>

    <div className="App">
        <Router>
            <Switch>
                <Route path="/map">
                    <Link to="/markers">Marquers</Link>
                    <br />
                    <Map />
                </Route>

                <Route path="/markers">
                    <Link to="/map">Map</Link>
                    <br />
                    <MarkerList />
                </Route>
            </Switch>
        </Router>
    </div>

    </MapContext.Provider>
  );
}

export default App;
