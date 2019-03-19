import React from 'react';
import momenet from 'moment';
import './Header.css';

const date = momenet().format('DD MMM');

const HeaderTitle = () => {
	return (
		<div className="header-title">
			<h1>Lambda School</h1>
			<p> @LambdaSchool &bull; {date}</p>
		</div>
	);
};

export default HeaderTitle;
