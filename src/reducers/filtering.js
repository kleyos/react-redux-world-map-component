export function filtValue(state='', action){
	switch(action.type){
		case 'FILTER':
			return action.value<0 ? action.value*(-1) : action.value 
		default:
			return state
	}
}
