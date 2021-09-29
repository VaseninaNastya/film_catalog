import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReduser from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';



import createSagaMiddleware from 'redux-saga'
import { watchFetchFilm } from './sagas';
const sagaMiddleware = createSagaMiddleware()




const store = createStore(rootReduser, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));
  sagaMiddleware.run(watchFetchFilm);
export default store;



