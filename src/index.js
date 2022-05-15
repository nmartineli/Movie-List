import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Watchlist from './pages/Watchlist';
import store from './redux/configureStore';
import Theme from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/watchlist" element={<Watchlist />} />
					</Routes>
				</BrowserRouter>
			</Theme>
		</Provider>
	</React.StrictMode>
);
