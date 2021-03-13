import React from 'react';
import './App.css';
import Map from './Map.jsx'
import 'leaflet/dist/leaflet.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




function App() {
  return (
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
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
