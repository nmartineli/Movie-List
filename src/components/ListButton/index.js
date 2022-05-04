import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../../redux/ducks/movieList';

export default function ListButton(props) {
	const { movie } = props;
	const movies = useSelector((state) => state.movies.movies);
	const movieList = useSelector((state) => state.movieList.movieList);
	const dispatch = useDispatch();

	function findMovie(id) {
		return movies.find((m) => m.id === id);
	}

	function handleAddToList(event) {
		event.preventDefault();
		const addedMovie = findMovie(event.target.value);
		dispatch(addToList(addedMovie));
	}

	function handleRemoveFromList(event) {
		event.preventDefault();
		const removedMovie = findMovie(event.target.value);
		dispatch(removeFromList(removedMovie));
	}

	if (movieList.find((m) => m.id === movie.id) !== undefined) {
		return (
			<Button variant="secondary" value={movie.id} onClick={handleRemoveFromList}>
				Remover da lista
			</Button>
		);
	} else {
		return (
			<Button variant="secondary" value={movie.id} onClick={handleAddToList}>
				Adicionar à lista
			</Button>
		);
	}
}
