import { PlaceMapActionType } from '../../actions/placeMapAction'

import type { InitialStateInterface, PayloadInterface } from './type'

const INITIAL_STATE: InitialStateInterface = {
  search_term: '',
  places: [],
  error: false,
  choosenPlace: { lat: 0, lng: 0 }
}

export default function placesMapReducer(state = INITIAL_STATE, { type, payload }: PayloadInterface) {
  switch (type) {
    case PlaceMapActionType.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: payload.response
      }

    case PlaceMapActionType.SET_CHOOSEN_PLACE:
      return {
        ...state,
        choosenPlace: payload
      }

    case PlaceMapActionType.FETCH_PLACES_FAILURE:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}
