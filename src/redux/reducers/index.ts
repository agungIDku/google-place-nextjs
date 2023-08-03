import { combineReducers } from 'redux'
import placesMapReducer from './placeMapReducer'

const rootReducer = combineReducers({
  places: placesMapReducer
})

export default rootReducer
