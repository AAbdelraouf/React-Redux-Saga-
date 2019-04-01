import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../Reducer/Reducer';

import createSagaMiddleware from "redux-saga";
import Sagas from '../Sagas/Sagas';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


var initialState = {
    count: 0,
    articles: [],
    remoteArticles: []
};

var Store = createStore(Reducer, initialState, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(Sagas)

export default Store;