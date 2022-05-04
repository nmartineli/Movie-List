import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import moviesReducer from './ducks/movies';
import movieListReducer from './ducks/movieList';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
	movies: moviesReducer,
	movieList: movieListReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
