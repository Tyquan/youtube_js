# Fetching Data (Expenses) from firebase 2

> change app.js

	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Provider } from 'react-redux';
	import AppRouter from './routers/AppRouter';
	import configureStore from './store/configureStore';
	import { startSetExpenses } from './actions/expenses';
	import { setTextFilter } from './actions/filters';
	import getVisibleExpenses from './selectors/expenses';
	import 'normalize.css/normalize.css';
	import './styles/styles.scss';
	import 'react-dates/lib/css/_datepicker.css';
	import firebase from "firebase";
	import './firebase/firebase';
	import registerServiceWorker from './registerServiceWorker';

	const store = configureStore();

	const jsx = (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);

	ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

	store.dispatch(startSetExpenses()).then(() => {
		ReactDOM.render(jsx, document.getElementById('root'));
		registerServiceWorker();
	});

> Edit the actions/expenses.js

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

	// 1. Fetch all expense data once
	// 2. Parse that data into an array
	// 3. Dispatch SET_EXPENSES
	export const startSetExpenses = () => {
	  return (dispatch) => {
	    return database.ref('expenses').once('value').then((snapshot) => {
	      const expenses = [];
	      snapshot.forEach((childSnapshot) => {
	        expenses.push({
	          id: childSnapshot.key,
	          ...childSnapshot.val()
	        });
	      })
	      dispatch(setExpenses(expenses));
	    });
	  };
	};