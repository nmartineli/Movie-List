import { Alert, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard/Index';

export default function Watchlist() {
	const movieList = useSelector((state) => state.movieList.movieList);
	console.log(movieList);
	return (
		<div>
			<Header />
			<div className="container">
				<Alert variant="light" style={{ marginTop: '15px' }}>
					<Alert.Heading>O que vamos assitir hoje?</Alert.Heading>
					<p>Confira a sua lista!</p>
				</Alert>
				<Container fluid style={{ marginTop: '15px' }}>
					<Row>
						{movieList.map((movie) => (
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
