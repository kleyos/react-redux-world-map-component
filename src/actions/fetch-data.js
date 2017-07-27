export function fetchDataMap(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_MAP',
			data
		})
	}
}

export function fetchDataPop(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_POP',
			data
		})
	}
}