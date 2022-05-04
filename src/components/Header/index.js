import { Navbar, Container, Button } from 'react-bootstrap';

export default function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">O que vamos assistir hoje?</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button>Confira a sua lista</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
