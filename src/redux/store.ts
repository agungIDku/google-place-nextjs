import { useMemo } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import rootReducer from './reducers'

let store

const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

  const store = createStore(rootReducer, initialState, compose(
    reduxMiddleware,
    composeEnhancers
  ))
  epicMiddleware.run(rootEpic)

  return store
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore (initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
