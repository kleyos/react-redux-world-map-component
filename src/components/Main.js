import React, { Component } from 'react';
import { feature } from "topojson-client"

import '../styles/Main.css';
import WorldMap from './world-map'
import FilterInput from './filter-input'

class Main extends Component {

	componentDidMount() {
		const { fetchDataMap, fetchDataPop } = this.props
		fetch("https://raw.githubusercontent.com/d3/d3.github.com/master/world-110m.v1.json")
			.then(response => response.json())
			.then(worldData => fetchDataMap( feature(worldData, worldData.objects.countries).features ))

		fetch("https://raw.githubusercontent.com/kleyos/react-redux-world-map-component/master/src/utils/population.json")
				.then(response => response.json())
				.then(population => fetchDataPop(population))
	}
	render() {
		return (
      <div className="Main">
				<FilterInput {...this.props}/>
				<WorldMap style={{ height:800 }} {...this.props}/>
      </div>
    );
  }
}

export default Main;
