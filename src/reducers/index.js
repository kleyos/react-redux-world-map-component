import { combineReducers } from 'redux'
import { worldData, population } from './fetch-data'

const rootReducer = combineReducers({ worldData, population })

export default rootReducer