export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';

export const getMovies = () => ({
	type: 'GET_MOVIES',
});

export const setMovies = (movies) => ({
	type: 'SET_MOVIES',
	movies,
});

const initialState = {
	movies: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES:
			const { movies } = action;
			return { ...state, movies };
		default:
			return state;
	}
};
