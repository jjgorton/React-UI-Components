import React from 'react';
import './Button.css';

const NumberButton = (props) => {
	return (
		<div className="numBut">
			<button onClick={props.click} className={props.buttonStyle} data-text={props.text}>
				{props.text}
			</button>
		</div>
	);
};

export default NumberButton;
