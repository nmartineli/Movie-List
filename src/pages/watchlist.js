import { Alert, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import MovieListCard from '../components/MovieListCard/Index';

import '../styles.css';

export default function Watchlist() {
	const movieList = useSelector((state) => state.movieList.movieList);
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? 'container-dark' : 'container-light'}>
			<Header />
			<div className="container">
				<Alert variant={darkMode ? 'dark' : 'light'} style={{ marginTop: '15px' }}>
					<Alert.Heading>O que vamos assitir hoje?</Alert.Heading>
					<p>Confira a sua lista!</p>
				</Alert>
				<Container fluid style={{ marginTop: '15px' }}>
					<Row>
						{movieList.map((movie) => (
							<Col key={movie.id}>
								<MovieListCard movie={movie} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
}
