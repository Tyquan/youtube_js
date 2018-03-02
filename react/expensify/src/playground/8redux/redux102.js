// Subscribing and Dynamic Actions

//REDUX 102
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
	console.log("Running", action);
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: incrementBy
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
			return {
				count: decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			};
		default:
			return state;
	}
});

// gets called everytime the state changes
store.subscribe(() => {
	// returns the current state
	console.log(store.getState());
});

store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch({
	type: 'RESET'
});

store.dispatch({
	type: 'DECREMENT',
});
store.dispatch({
	type: 'DECREMENT',
	decrementBy: -10
});
store.dispatch({
	type: 'DECREMENT',
	decrementBy: -10
});

store.dispatch({
	type: 'SET',
	count: 101
});