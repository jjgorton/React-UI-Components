import React from 'react';
import './Card.css';

import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
	return (
		<a className="card-container" href="https://www.reactjs.org">
			<CardBanner />
			<CardContent />
		</a>
	);
};

export default CardContainer;
