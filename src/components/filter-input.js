import React, { Component } from 'react'

class FilterInput extends Component{
	handlePressEnter(e){
	console.log('write value', this.filterInput.value)
	//  if (e.key==='Enter') {
	// 		 console.log('write value', this.filterInput.value)
	// 	 }
 }
	render(){
		const { filtering } = this.props

		return <div>
			<label className=""> POPULATION </label>
			<input className="filter-input" type="number"
				ref={input => this.filterInput=input}
				onBlur={()=>filtering(this.filterInput.value)}/>
		</div>
	}
}

export default FilterInput