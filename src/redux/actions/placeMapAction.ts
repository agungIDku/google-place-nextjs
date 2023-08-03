import {
  FETCH_PLACES,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
  SET_CHOOSEN_PLACE
} from "../types/placeMapType"

export const fetchPlaces = (searchTerm: string) => ({
  type: FETCH_PLACES,
  payload: { searchTerm }
})
export const fetchPlacesSuccess = (response) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: { response }
})

export const fetchPlacesFailure = (error, places) => ({
  type: FETCH_PLACES_FAILURE,
  payload: { error, places }
})

export const setChoosenPlace = (coordinate) => ({
  type: SET_CHOOSEN_PLACE,
  payload: { ...coordinate }
})
