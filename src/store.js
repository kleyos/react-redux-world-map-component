import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const defaultState = { filtValue:500000 }

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

export default store