import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main.jsx';
import { Footer } from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<Main />
		<Footer />
	</React.StrictMode>
);
reportWebVitals();
