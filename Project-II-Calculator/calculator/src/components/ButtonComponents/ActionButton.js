import React from 'react';
import './Button.css';

const ActionButton = (props) => {
	return (
		<div className="actBut">
			<button onClick={props.click} className={props.buttonStyle} data-text={props.text}>
				{props.text}
			</button>
		</div>
	);
};

export default ActionButton;
