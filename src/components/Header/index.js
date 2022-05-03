import { Navbar, Container, Button } from 'react-bootstrap';

export default function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Movie Watchlist</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button>Check your watchlist</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
