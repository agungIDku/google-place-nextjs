import { combineEpics } from 'redux-observable'
import { fetchPlacesEpic } from './placeMapEpic'

export const rootEpic = combineEpics(fetchPlacesEpic)
