import React, { Component } from 'react'
import { geoMercator, geoPath } from "d3-geo"

class WorldMap extends Component {

	projection() {
		return geoMercator().scale(100).translate([ 1000/2, 450/2 ])
	}

	render() {
		const { worldData=[], population=[], filtValue } = this.props
		return (
			<svg width={`${100}%`} height={`${100}%`} viewBox="0 0 1000 450">
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
						? population.filter(item => item.Population > filtValue)
							.map( (city,i) =>
								<g key={i} className="marker-container">
									<circle
										key={ `marker-${i}` }
										cx={ this.projection()([city.Long, city.Lat])[0]}
										cy={ this.projection()([city.Long, city.Lat])[1]}
										r={ city.Population / 2000000 }
										fill={'rgba(233,30,99,255)'}
										className="marker"/>
									<text className="marker-label"
										key={ `marker-label-${i}` }
										x={ this.projection()([city.Long, city.Lat])[0] }
										y={ this.projection()([city.Long, city.Lat])[1]+2*(city.Population / 2000000) }>
										{`${city['City Name']}, population: ${city['Population']}`}
									</text>
								</g>)
						: false
					}
				</g>
			</svg>
		)
	}
}

export default WorldMap

