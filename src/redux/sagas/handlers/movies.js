import { call, put } from 'redux-saga/effects';
import { setMovies } from '../../ducks/movies';
import { requestGetMovies } from '../requests/movies';

export function* handleGetMovies(action) {
	try {
		const response = yield call(requestGetMovies);
		const { data } = response;
		yield put(setMovies(data.items));
	} catch (err) {
		console.log(err);
	}
}
