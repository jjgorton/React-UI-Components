import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			input : '',
			value : 0
		};
	}

	handleClick = (event) => {
		this.setState({ input: this.state.input + event.target.dataset.text });
		console.log(event.target.dataset.text);

		// this.setState({ value: this.state.value + parseInt(event.target.dataset.text) });

		// if (event.target.dataset.operation) {
		// 	this.operation(event);
		// } else {
		// 	this.digits(event);
		// }
	};

	clear = () => {
		this.setState({ input: '' });
	};

	digits = (event) => {
		// let number = 0;
		// number = number + parseInt(this.state.input);
		// console.log('saved', number);
		// return number;
	};

	operation = (event) => {
		// console.log(event.target.dataset.operation);
	};

	equals = (event) => {
		let value = parseInt(this.state.input);

		console.log(typeof value, value);

		this.setState({ input: this.state.value });
	};

	render() {
		return (
			<div className="calc-container">
				<CalculatorDisplay displayStyle="display" text={this.state.input} />

				<div className="mainPad">
					<ActionButton click={this.clear} buttonStyle="action" text="clear" />
					{/* <OperatorButton buttonStyle="operater" text="&#247;" /> */}

					<NumberButton click={this.handleClick} buttonStyle="number" text="7" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="8" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="9" />
					{/* <OperatorButton buttonStyle="operater" text="x" /> */}

					<NumberButton click={this.handleClick} buttonStyle="number" text="4" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="5" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="6" />
					{/* <OperatorButton buttonStyle="operater" text="-" /> */}

					<NumberButton click={this.handleClick} buttonStyle="number" text="1" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="2" />
					<NumberButton click={this.handleClick} buttonStyle="number" text="3" />
					{/* <OperatorButton buttonStyle="operater" text="+" /> */}

					<ActionButton click={this.handleClick} buttonStyle="action" text="0" />
					{/* <OperatorButton buttonStyle="operater" text="=" /> */}
				</div>

				<div className="operatorPad">
					<OperatorButton
						// click={this.operation}
						click={this.handleClick}
						buttonStyle="operater"
						operation="/"
						text="&#247;"
					/>
					<OperatorButton click={this.handleClick} buttonStyle="operater" operation="*" text="x" />
					<OperatorButton click={this.handleClick} buttonStyle="operater" operation="-" text="-" />
					<OperatorButton click={this.handleClick} buttonStyle="operater" operation="+" text="+" />
					<OperatorButton click={this.equals} buttonStyle="operater" text="=" />
				</div>
			</div>
		);
	}
}

export default App;
