import { takeLatest } from 'redux-saga/effects';
import { handleGetMovies } from './handlers/movies';
import { GET_MOVIES } from '../ducks/movies';

export function* watcherSaga() {
	yield takeLatest(GET_MOVIES, handleGetMovies);
}
