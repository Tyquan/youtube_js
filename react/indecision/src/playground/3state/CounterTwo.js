import React, {Component} from 'react';

class CounterTwo extends Component {
	constructor(props){
		super(props);
		this.handlePlusOne = this.handlePlusOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: props.count
		};
		//console.log(this.state);
	}
	handlePlusOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne(){
		// this.setState((state, props) => {
		// 	let newState = state.count--;
		// 	return (
		// 		this.state.count: newState
		// 	);
		// });
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}
	handleReset(){
		// doesnt work
		this.setState((prevState) => {
			return {
                count: 0
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handlePlusOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}

// Default Property
CounterTwo.defaultProps = {
	count: 0
}

export default CounterTwo;