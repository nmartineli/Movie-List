import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './redux/ducks/movies';

import Header from './components/Header';
import MovieCard from './components/MovieCard/Index';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	const movies = useSelector((state) => state.movies.movies);

	console.log(movies);

	return (
		<div>
			<Header />
			<div className="container">
				<Container fluid style={{ marginTop: '30px' }}>
					<Row>
						{movies.map((movie) => (
							<Col>
								<MovieCard key={movie.id} movie={movie} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default App;
