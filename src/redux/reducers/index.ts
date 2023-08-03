import { combineReducers } from 'redux'
import placesMapReducer from './placeMap'

const data = {
  places: placesMapReducer
}

export type StateType = typeof data

const rootReducer = combineReducers(data)

export default rootReducer
