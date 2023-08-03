import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import type { PlaceInterface } from '../reducers/placeMap/type'
import { PlaceMapActionType, fetchPlacesSuccess, fetchPlacesFailure } from '../actions/placeMapAction'

export const fetchPlacesEpic: Epic = (action$) => {
  return action$.pipe(
    ofType(PlaceMapActionType.FETCH_PLACES),
    mergeMap(action =>
      ajax.getJSON(`/api/mock?keyword=${action.payload.searchTerm}`).pipe(
        map(res => fetchPlacesSuccess(res as PlaceInterface[])
      ),
        takeUntil(
          action$.pipe(
            ofType(PlaceMapActionType.FETCH_PLACES)
          )
        ),
        catchError(() =>
          of(
            fetchPlacesFailure(true)
          )
        )
      )
    )
  )
}
