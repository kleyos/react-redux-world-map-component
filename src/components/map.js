import React, { Component } from 'react'

import AnyChart from '../../dist/anychart-react.min.js'
import '../utils/anymap.dev.min.js'

class Map extends Component {
	 render() {
		let data = anychart.data.set([
			{'id': 'AU.WA', 'value': 300},
			{'id': 'AU.JB', 'value': 230},
			{'id': 'AU.NS', 'value': 240},
			{'id': 'AU.VI', 'value': 275},
			{'id': 'AU.NT', 'value': 130},
			{'id': 'AU.TS', 'value': 190},
			{'id': 'AU.CT', 'value': 100},
			{'id': 'AU.SA', 'value': 305},
			{'id': 'AU.QL', 'value': 190}
		]);

		return <AnyChart
				width={800}
				height={600}
				type="choropleth"
				data={data}
				title="Map example"
				geoData="anychart.maps.australia"/>
	}
}
export default Map