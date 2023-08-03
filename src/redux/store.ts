import { useMemo } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import rootReducer from './reducers'

import type { StateType } from './reducers'

const initStore = () => {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

  const store = createStore(rootReducer, compose(
    reduxMiddleware
  ))
  epicMiddleware.run(rootEpic)

  return store
}



export const initializeStore = (preloadedState: StateType) => {
  let _store = initStore()

  if (preloadedState) {
    _store = initStore()
  }

  if (typeof window === 'undefined') return _store

  return _store
}

export function useStore (initialState: StateType) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
