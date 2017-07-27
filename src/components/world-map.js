import React, { Component } from 'react'

import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

class WorldMap extends Component {

	projection() {
		return geoMercator().scale(100).translate([ 1000/2, 800/2 ])
	}
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
		const { worldData=[], population=[]} = this.props
		return (
			<svg width={`${100}%`} height={`${100}%`} viewBox="0 0 1000 800">
				<g className="countries">
					{
						worldData.map((d,i) => (
							<path
								key={ `path-${ i }` }
								d={ geoPath().projection(this.projection())(d) }
								className="country"
								fill={ `rgba(38,50,56,${1 / worldData.length * i})` }
								stroke="#FFFFFF"
								strokeWidth={ 0.5 }
							/>
						))
					}
				</g>
				<g className="markers">
					{population.length>0
						? population.filter(item => item.Population > 500000)
							.map( (city,i) =>
								<circle
									key={ `marker-${i}` }
									cx={ this.projection()([city.Long, city.Lat])[0]}
									cy={ this.projection()([city.Long, city.Lat])[1]}
									r={ city.Population / 3000000 }
									fill="#E91E63"
									stroke="#FFFFFF"
									className="marker"/>)
						: false
					}
				</g>
			</svg>
		)
	}
}

export default WorldMap

