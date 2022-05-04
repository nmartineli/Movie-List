const ADD_TO_LIST = 'ADD_TO_LIST';
const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';

export function addToList(movie) {
	return {
		type: 'ADD_TO_LIST',
		addedMovie: movie,
	};
}

export function removeFromList(movie) {
	return {
		type: 'REMOVE_FROM_LIST',
		removedMovie: movie,
	};
}

const initialState = {
	movieList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_LIST:
			const { addedMovie } = action;
			const newList = [...state.movieList, addedMovie];
			return { ...state, movieList: newList };
		case REMOVE_FROM_LIST:
			const { removedMovie } = action;
			const updatedList = state.movieList.filter((m) => m.id !== removedMovie.id);
			return { ...state, movieList: updatedList };
		default:
			return state;
	}
};
