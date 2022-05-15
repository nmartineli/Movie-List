import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';

import Header from './components/Header';
import MovieCard from './components/MovieCard/Index';
import { getMovies } from './redux/ducks/movies';

import './styles.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	const movies = useSelector((state) => state.movies.movies);

	return (
		<div className="container-light">
			<ScrollToTop smooth />
			<Header />
			<div className="container">
				<Alert style={{ marginTop: '15px' }}>
					<Alert.Heading>O que vamos assitir hoje?</Alert.Heading>
					<p>
						Sem ideia do que assistir? Esta é a lista dos 250 melhores filmes de acordo com os usuários da maior base de dados de
						filmes, a IMDB. Escolha os seus favoritos e monte a sua lista!
					</p>
				</Alert>
				<Container fluid style={{ marginTop: '15px' }}>
					<Row>
						{movies.map((movie) => (
							<Col key={movie.id}>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default App;
