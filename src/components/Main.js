import React, { Component } from 'react';
//import Datamap from 'datamaps'

import logo from '../styles/logo.svg';
import '../styles/App.css';

import WorldMap from './world-map'
//import Map from './components/map'
class App extends Component {
	// componentDidMount(){
	// 	return <Map />
	// }
	render() {
		//const map = new Datamap({element:document.getElementById("map")})
		return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<WorldMap style={{ height:800 }} {...this.props}/>
      </div>
    );
  }
}

export default App;
