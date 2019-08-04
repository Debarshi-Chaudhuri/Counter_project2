import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {count} from './reducers/counterValue.js'

export const sagaMiddleware=createSagaMiddleware()
export const store=()=>createStore(count,applyMiddleware(sagaMiddleware,logger))

