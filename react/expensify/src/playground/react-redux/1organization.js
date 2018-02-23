/*
	Organizing Redux
	(See redux/storingReduxData.js)
*/

// actions folder
//expenses.js
import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt =  ''} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

//filters.js
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});
export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});





// reducers folder
//expenses.js
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => {
				return id !== action.id;
			});
		default:
			return state;
	}
};
export default expensesReducer;

//filters.js
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
};
export default filtersReducer;




// selectors folder
//expenses.js
export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
		// sorting below
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1; // a comes first
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1; // greater amount comes first
		}
	});
};






// store folder
//configureStore.js
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
	const store = createStore(combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	}));

	return store;
};

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(addExpense({
	description: 'Water Bill'
}));

store.dispatch(addExpense({
	description: 'Gas Bill'
}));

// filter only things with water
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();