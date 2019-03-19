import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail.js';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
	return (
		<div className="app-container">
			<ImageThumbnail />
			<div className="main">
				<HeaderContainer />
				<CardContainer />
				<Footer />
			</div>
		</div>
	);
};

export default App;
