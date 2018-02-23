import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import registerServiceWorker from './registerServiceWorker';

// spreadRedux
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// yarn add uui@3.1.0
const addExpense = ({ description = '', note = '', amount = 0, createdAt =  ''} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// Edit Expense
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

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

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

const sortByAmount = (amount = 0) => ({
	type: 'SET_BY_AMOUNT',
	amount
});

const sortByDate = (date = '') => ({
	type: 'SET_BY_DATE',
	date
});


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
		case 'SET_BY_AMOUNT':
			return {
				...state,
				amount: action.amount
			};
		case 'SET_BY_DATE':
			return {
				...state,
				date: action.date
			};
		default:
			return state;
	}
};

const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}));

store.subscribe(() => {
	console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({
	description: 'Rent',
	amount: 100
}));
const expense2 = store.dispatch(addExpense({
	description: 'Coffee',
	amount: 300
}));

store.dispatch(removeExpense({
	id: expense1.expense.id
}));

// editing the state
store.dispatch(editExpense(expense2.expense.id, {
	amount: 500
}));

// changing the filter state
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// Spread Object
const user = {
	name: 'Jen',
	age: 31
};
console.log({
	...user,
	location: 'New York',
	age: 27,

});

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();