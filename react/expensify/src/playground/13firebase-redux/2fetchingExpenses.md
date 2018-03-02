# Fetching Data (Expenses) from firebase

> actions/expenses.js

	import uuid from 'uuid';
	import database from '../firebase/firebase.js';

	// ADD_EXPENSE
	export const addExpense = (expense) => ({
	  type: 'ADD_EXPENSE',
	  expense
	});

	export const startAddExpense = (expenseData = {}) => {
	  return (dispatch) => {
	    const {
	      description = '',
	      note = '',
	      amount = 0,
	      createdAt = 0
	    } = expenseData;
	    // save some data
	    const expense = {description, note, amount, createdAt};
	    database.ref('expenses')
	      .push(expense)
	      .then((ref) => {
	        dispatch(addExpense({
	          id: ref.key,
	          ...expense
	        }));
	      })
	      .catch((e) => {
	        console.log('Error', e);
	      });
	  };
	};

	// REMOVE_EXPENSE
	export const removeExpense = ({ id } = {}) => ({
	  type: 'REMOVE_EXPENSE',
	  id
	});

	// EDIT_EXPENSE
	export const editExpense = (id, updates) => ({
	  type: 'EDIT_EXPENSE',
	  id,
	  updates
	});


	// SET_EXPENSES
	export const setExpenses = (expenses) => ({
	  type: 'SET_EXPENSES',
	  expenses
	});

> Add support for 'SET_EXPENSES' in reducers/expenses.js

	const expensesReducerDefaultState = [];
	export default (state = expensesReducerDefaultState, action) => {
	  switch (action.type) {
	    case 'ADD_EXPENSE':
	      return [
	        ...state,
	        action.expense
	      ];
	    case 'REMOVE_EXPENSE':
	      return state.filter(({ id }) => id !== action.id);
	    case 'EDIT_EXPENSE':
	      return state.map((expense) => {
	        if (expense.id === action.id) {
	          return {
	            ...expense,
	            ...action.updates
	          };
	        } else {
	          return expense;
	        };
	      });
	    case 'SET_EXPENSES':
	      return action.expenses;
	    default:
	      return state;
	  }
	};