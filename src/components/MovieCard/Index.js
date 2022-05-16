import ListButton from '../ListButton';

import styled from 'styled-components';

const CardContainer = styled.div`
	width: 12rem;
	height: 32rem;
	margin-bottom: 3rem;
	border: none;
`;

const MovieTitle = styled.h2`
	font-weight: 700;
	font-size: ${(props) => props.theme.fontSize.xl};
	color: ${(props) => props.theme.colors.grey900};
	margin: 0;
`;

const MovieYear = styled.h3`
	font-weight: 700;
	font-size: ${(props) => props.theme.fontSize.sm};
	margin: 8px 0;
	color: ${(props) => props.theme.colors.grey400};
`;

const MovieRatingContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
`;

const MovieRating = styled.h4`
	font-size: ${(props) => props.theme.fontSize.sm};
	color: ${(props) => props.theme.colors.grey900};
	margin: 0;
`;

const MovieCrew = styled.h3`
	font-size: ${(props) => props.theme.fontSize.base};
	margin: 8px 0;
	color: ${(props) => props.theme.colors.grey500};
`;

export default function MovieCard(props) {
	const { movie } = props;

	return (
		<CardContainer>
			<img src={movie.image} style={{ width: '100%' }} alt={movie.title} />
			<MovieYear>{movie.year}</MovieYear>
			<MovieTitle>{movie.title}</MovieTitle>
			<MovieRatingContainer>
				<img
					src="./logo-imdb.png"
					style={{ width: '25px', height: '100%', marginRight: '5px' }}
					alt="Internet Movie Database logo"
				/>
				<MovieRating> {movie.imDbRating} </MovieRating>
			</MovieRatingContainer>
			<MovieCrew>Equipe: {movie.crew}</MovieCrew>
			<ListButton movie={movie} />
		</CardContainer>
	);
}
