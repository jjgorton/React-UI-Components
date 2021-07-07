import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
	return (
		<div className="opBut">
			<button
				onClick={props.click}
				className={props.buttonStyle}
				data-text={props.text}
				data-operation={props.operation}
			>
				{props.text}
			</button>
		</div>
	);
};

export default OperatorButton;
