import React, { Component } from 'react'

class FilterInput extends Component{
	render(){
		const { filtering } = this.props
		return <input className="filter-input" onChange={e => filtering(e.target.value)}/>
	}
}

export default FilterInput