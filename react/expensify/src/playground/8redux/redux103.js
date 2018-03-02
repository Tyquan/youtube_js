// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

//REDUX 103
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

// reducers
const countReducer = (state = { count: 0 }, action) => {
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
}

// reference the reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	// returns the current state
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 9 }));
store.dispatch(decrementCount({ decrementBy: 15 }));
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 10005}));

unsubscribe();