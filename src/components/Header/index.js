import { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Header() {
	const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

	return (
		<Navbar variant={darkMode ? 'dark' : 'light'} bg={darkMode ? 'dark' : 'light'} expand="lg">
			<Container>
				<Link to="/">
					<Navbar.Brand>O que vamos assistir hoje?</Navbar.Brand>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button onClick={toggleDarkMode} style={{ marginRight: '10px' }} variant={darkMode ? 'light' : 'primary'}>
						Dark Mode
					</Button>
					<Link to="/watchlist">
						<Button variant={darkMode ? 'light' : 'primary'}>Confira a sua lista</Button>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
