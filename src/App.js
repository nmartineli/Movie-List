import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './redux/ducks/movies';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	const movies = useSelector((state) => state.movies.movies);

	console.log(movies);

	return (
		<div className="App">
			<h1>Test</h1>
		</div>
	);
}

export default App;
