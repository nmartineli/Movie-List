import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListButton } from '../../Buttons';

const HeaderBar = styled.div`
	height: 80px;
	background-color: ${(props) => props.theme.colors.white};
`;
const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
`;
const HeaderLogo = styled.div`
	display: flex;
`;

const HeaderText = styled.h1`
	font-size: ${(props) => props.theme.fontSize.xxl};
	font-weight: bold;
`;

export default function Header() {
	return (
		<HeaderBar>
			<HeaderContainer>
				<HeaderLogo>
					<Link to="/">
						<HeaderText>O que vamos assistir hoje?</HeaderText>
					</Link>
				</HeaderLogo>
				<Link to="/watchlist">
					<ListButton> Confira a sua lista</ListButton>
				</Link>
			</HeaderContainer>
		</HeaderBar>
	);

	// return (
	// 	<Navbar expand="lg">
	// 		<Container>
	// 			<Link to="/">
	// 				<Navbar.Brand>O que vamos assistir hoje?</Navbar.Brand>
	// 			</Link>
	// 			<Navbar.Toggle />
	// 			<Navbar.Collapse className="justify-content-end">
	// 				<Link to="/watchlist">
	// 					<Button>Confira a sua lista</Button>
	// 				</Link>
	// 			</Navbar.Collapse>
	// 		</Container>
	// 	</Navbar>
	// );
}
