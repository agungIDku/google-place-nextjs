import type { PlaceMapActionType } from "@/redux/actions/placeMapAction"

export interface PlaceInterface {
  type: 'business' | 'home'
  name: string
  address: string
  coords: {
    lat: number
    lng: number
  }
  description: string
}

export interface InitialStateInterface {
  search_term: string
  places: PlaceInterface[]
  error: boolean
  choosenPlace: { lat: number; lng: number }
}


export type PayloadInterface =
  | { type: PlaceMapActionType.FETCH_PLACES_SUCCESS; payload: { response: PlaceInterface[] }}
  | { type: PlaceMapActionType.SET_CHOOSEN_PLACE; payload: PlaceInterface['coords'] }
  | { type: PlaceMapActionType.FETCH_PLACES_FAILURE; payload: boolean }
