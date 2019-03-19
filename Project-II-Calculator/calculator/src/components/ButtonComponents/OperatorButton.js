import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
	return (
		<div className="opBut">
			<button className={props.buttonStyle}>{props.text}</button>
		</div>
	);
};

export default OperatorButton;
