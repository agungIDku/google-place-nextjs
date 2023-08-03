import { FETCH_PLACES_FAILURE, FETCH_PLACES_SUCCESS, SET_CHOOSEN_PLACE } from "../types/placeMapType"

const INITIAL_STATE = {
  search_term: '',
  places: [],
  error: null,
  choosenPlace: { lat: 0, lng: 0 }
}

export default function placesMapReducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: payload.response
      }
    case FETCH_PLACES_FAILURE:
      return {
        ...state,
        error: payload.error
      }

    case SET_CHOOSEN_PLACE:
      return {
        ...state,
        choosenPlace: payload
      }

    default:
      return state
  }
}
