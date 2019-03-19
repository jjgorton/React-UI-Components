import React from 'react';
import './Button.css';

const ActionButton = (props) => {
	return (
		<div className="actBut">
			<button className={props.buttonStyle}>{props.text}</button>
		</div>
	);
};

export default ActionButton;