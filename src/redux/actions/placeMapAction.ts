import type { PlaceInterface, InitialStateInterface } from "../reducers/placeMap/type"

export enum PlaceMapActionType {
  FETCH_PLACES = 'FETCH_PLACES',
  FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS',
  FETCH_PLACES_FAILURE = 'FETCH_PLACES_FAILURE',
  SET_CHOOSEN_PLACE = 'SET_CHOOSEN_PLACE'
}


export const fetchPlaces = (searchTerm: string) => ({
  type: PlaceMapActionType.FETCH_PLACES,
  payload: { searchTerm }
})
export const fetchPlacesSuccess = (response: PlaceInterface[]) => ({
  type: PlaceMapActionType.FETCH_PLACES_SUCCESS,
  payload: { response }
})

export const fetchPlacesFailure = (payload: InitialStateInterface['error']) => ({
  type: PlaceMapActionType.FETCH_PLACES_FAILURE,
  payload
})

export const setChoosenPlace = (coordinate: InitialStateInterface['choosenPlace']) => ({
  type: PlaceMapActionType.SET_CHOOSEN_PLACE,
  payload: { ...coordinate }
})
