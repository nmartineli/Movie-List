import { Card } from 'react-bootstrap';
import ListButton from '../ListButton';

export default function MovieCard(props) {
	const { movie } = props;

	return (
		<Card style={{ width: '15rem', height: '42rem', marginBottom: '15px' }}>
			<Card.Header as="h5" className="text-center">
				# {movie.rank}
			</Card.Header>
			<Card.Img variant="top" src={movie.image} />
			<Card.Body>
				<Card.Title>{movie.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted" as="h5">
					{movie.year}
				</Card.Subtitle>
				<Card.Subtitle className="mb-2 text-muted" as="h6">
					<img src="./logo-imdb.png" style={{ width: '29px', marginRight: '5px' }} />
					{movie.imDbRating}
				</Card.Subtitle>
				<Card.Text>Equipe: {movie.crew}</Card.Text>
				<ListButton movie={movie} />
			</Card.Body>
		</Card>
	);
}
