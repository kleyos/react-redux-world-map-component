import React, { Component } from 'react'

class FilterInput extends Component{
	render(){
		const { filtering } = this.props

		return <div className="filter">
			<label className="filter-label"> POPULATION </label>
			<input className="filter-input" type="number"
				ref={input => this.filterInput=input}
				onBlur={()=>filtering(this.filterInput.value)}/>
		</div>
	}
}

export default FilterInput