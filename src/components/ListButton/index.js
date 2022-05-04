import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../../redux/ducks/movieList';

export default function ListButton(props) {
	const [onList, setOnList] = useState(false);

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
		setOnList(true);
	}

	function handleRemoveFromList(event) {
		event.preventDefault();
		const removedMovie = findMovie(event.target.value);
		console.log(removedMovie);
		dispatch(removeFromList(removedMovie));
		setOnList(false);
	}

	if (onList) {
		return (
			<Button variant="secondary" value={movie.id} onClick={handleRemoveFromList}>
				Remover da lista
			</Button>
		);
	}

	return (
		<Button variant="secondary" value={movie.id} onClick={handleAddToList}>
			Adicionar à lista
		</Button>
	);
}
