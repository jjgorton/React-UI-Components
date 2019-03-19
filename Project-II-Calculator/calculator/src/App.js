import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
	return (
		<div className="calc-container">
			<CalculatorDisplay displayStyle="display" placeholder="0" />

			<div className="mainPad">
				<ActionButton buttonStyle="action" text="clear" />
				{/* <OperatorButton buttonStyle="operater" text="&#247;" /> */}

				<NumberButton buttonStyle="number" text="7" />
				<NumberButton buttonStyle="number" text="8" />
				<NumberButton buttonStyle="number" text="9" />
				{/* <OperatorButton buttonStyle="operater" text="x" /> */}

				<NumberButton buttonStyle="number" text="4" />
				<NumberButton buttonStyle="number" text="5" />
				<NumberButton buttonStyle="number" text="6" />
				{/* <OperatorButton buttonStyle="operater" text="-" /> */}

				<NumberButton buttonStyle="number" text="1" />
				<NumberButton buttonStyle="number" text="2" />
				<NumberButton buttonStyle="number" text="3" />
				{/* <OperatorButton buttonStyle="operater" text="+" /> */}

				<ActionButton buttonStyle="action" text="0" />
				{/* <OperatorButton buttonStyle="operater" text="=" /> */}
			</div>

			<div className="operatorPad">
				<OperatorButton buttonStyle="operater" text="&#247;" />
				<OperatorButton buttonStyle="operater" text="x" />
				<OperatorButton buttonStyle="operater" text="-" />
				<OperatorButton buttonStyle="operater" text="+" />
				<OperatorButton buttonStyle="operater" text="=" />
			</div>
		</div>
	);
};

export default App;
