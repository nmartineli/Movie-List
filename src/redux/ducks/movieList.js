const ADD_TO_LIST = 'ADD_TO_LIST';

export function addToList(movie) {
	return {
		type: 'ADD_TO_LIST',
		movie,
	};
}

const initialState = {
	movieList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_LIST:
			const { movie } = action;
			const newList = [...state.movieList, movie];
			return { ...state, movieList: newList };
		default:
			return state;
	}
};
