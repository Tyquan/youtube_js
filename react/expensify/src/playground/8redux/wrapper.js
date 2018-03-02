// Redux Wrapper for Reducers

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

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
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

const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}));

store.subscribe(() => {
	console.log(store.getState());
});

// const expense1 = store.dispatch(addExpense({
// 	description: 'Rent',
// 	amount: 100
// }));
// const expense2 = store.dispatch(addExpense({
// 	description: 'Coffee',
// 	amount: 300
// }));

// store.dispatch(removeExpense({
// 	id: expense1.expense.id
// }));

// // editing the state
// store.dispatch(editExpense(expense2.expense.id, {
// 	amount: 500
// }));

// // changing the filter state
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // date

store.dispatch(setStartDate(125)); // startDate = 125
store.dispatch(setStartDate()); // should go back to being undefined
store.dispatch(setEndDate(1250)); // endDate = 1250