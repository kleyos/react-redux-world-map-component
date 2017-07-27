import { combineReducers } from 'redux'
import { worldData, population } from './fetch-data'
import { filtValue } from './filtering'

const rootReducer = combineReducers({ worldData, population, filtValue})

export default rootReducer