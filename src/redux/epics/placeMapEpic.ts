import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as actions from '../actions/placeMapAction'
import { FETCH_PLACES } from "../types/placeMapType"

export const fetchPlacesEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(action =>
      ajax.getJSON(`/api/mock?keyword=${action.payload.searchTerm}`).pipe(
        map(res => actions.fetchPlacesSuccess(res.predictions)),
        takeUntil(
          action$.pipe(
            ofType(FETCH_PLACES)
          )
        ),
        catchError((error) =>
          of(
            actions.fetchPlacesFailure(
              error,
              action.payload.isServer
            )
          )
        )
      )
    )
  )
}
