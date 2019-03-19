import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	return <textarea className={props.displayStyle} placeholder={props.placeholder} />;
};

export default CalculatorDisplay;
