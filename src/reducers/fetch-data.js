export function worldData(state=[], action){
	switch(action.type){
		case 'FETCH_MAP':
			return [...action.data]
		default:
			return state
	}
}

export function population(state=[], action){
 switch(action.type){
	 case 'FETCH_POP':
		 return [...action.data]
	 default:
		 return state
 }
}