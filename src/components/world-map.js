import React, { Component } from 'react'

import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import { population } from '../utils/population.js'

class WorldMap extends Component {
	// constructor() {
	//   super()
	//   this.state = {
	//     worldData: [],
	//   }
	// }
	projection() {
		return geoMercator()
			.scale(100)
			.translate([ 800 / 2, 450 / 2 ])
	}
	componentDidMount() {
		const fetchDataMap = this.props.fetchDataMap

		fetch("https://raw.githubusercontent.com/d3/d3.github.com/master/world-110m.v1.json")
			.then(response => response.json())
			.then(worldData => fetchDataMap( feature(worldData, worldData.objects.countries).features ))
		
	}
	render() {
		return (
			<svg width={`${100}%`} height={`${100}%`} viewBox="0 0 1000 800">
				<g className="countries">
					{
						this.props.worldData.map((d,i) => (
							<path
								key={ `path-${ i }` }
								d={ geoPath().projection(this.projection())(d) }
								className="country"
								fill={ `rgba(38,50,56,${1 / this.props.worldData.length * i})` }
								stroke="#FFFFFF"
								strokeWidth={ 0.5 }
							/>
						))
					}
				</g>
				<g className="markers">	</g>
			</svg>
		)
		// 		population.filter(item => item.Population > 500000).map( (city,i) =>
		// 			<circle
		//         key={ `marker-${i}` }
		//         cx={ this.projection()(city.Lat)[0] }
		//         cy={ this.projection()(city.Long)[1] }
		//         r={ city.Population / 3000000 }
		//         fill="#E91E63"
		//         stroke="#FFFFFF"
		//         className="marker"/>)
	}
}

export default WorldMap

