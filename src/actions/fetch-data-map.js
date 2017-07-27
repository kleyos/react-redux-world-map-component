export function fetchDataMap(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH', 
			data
		})
	}
}