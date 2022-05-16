import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div``;
const HeaderLogo = styled.div``;

export default function Header() {
	return (
		<Navbar expand="lg">
			<Container>
				<Link to="/">
					<Navbar.Brand>O que vamos assistir hoje?</Navbar.Brand>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Link to="/watchlist">
						<Button>Confira a sua lista</Button>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
