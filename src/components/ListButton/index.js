import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../redux/ducks/movieList';

export default function ListButton(props) {
	const { movie } = props;

	const movies = useSelector((state) => state.movies.movies);

	const dispatch = useDispatch();

	function findMovie(id) {
		return movies.find((m) => m.id === id);
	}

	function handleAddToList(event) {
		event.preventDefault();
		const addedMovie = findMovie(event.target.value);
		console.log(addedMovie);
		dispatch(addToList(addedMovie));
	}

	return (
		<Button variant="secondary" value={movie.id} onClick={handleAddToList}>
			Adicionar à lista
		</Button>
	);
}
