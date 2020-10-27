import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddeware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddeware)

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

// const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)))
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

sagaMiddeware.run(sagas)

export default store;
