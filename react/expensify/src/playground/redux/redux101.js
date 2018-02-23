//REDUX 101
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
	console.log("Running");
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				count: state.count - 1
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
});

// returns the current state
console.log(store.getState());

// Actions - just an object that gets sent to the store
// I'd like to increment the count
// I'd like to reset the count to zero
//actions = increment, decrement, reset

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch({
	type: 'RESET'
});

store.dispatch({
	type: 'DECREMENT'
});

// returns the current state
console.log(store.getState());