import { createStore, applyMiddleware } from 'redux';
import rootReduser from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { watchFetchFilms } from './sagas';
import { watchFetchOneFilm } from './sagas';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReduser, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));
  sagaMiddleware.run(watchFetchFilms);
  sagaMiddleware.run(watchFetchOneFilm);
export default store;



export type RootState = ReturnType<typeof store.getState>