# Async Redux Actions

## Creating Expense Using Firebase

> ./components/AddExpensePage.js

	import React from 'react';
	import { connect } from 'react-redux';
	import ExpenseForm from './ExpenseForm';
	import { addExpense } from '../actions/expenses';

	export class const AddExpensePage extends React.Component {
		onSubmit = (expense) => {
			props.dispatch(addExpense(expense));
			// go to the main page
			props.history.push('/');
		}
		render(){
			return (
				<div>
					<h2>Add Expense</h2>
					<ExpenseForm 
						onSubmit={this.onSubmit}
					/>
				</div>
			);
		}
	}

	export default connect(undefined, mapDispatchToProps)(AddExpensePage);

> Firebase shouldnt be directly accessed from a component but from the actions

> npm install redux-thunk
	
	yarn add redux-thunk@2.2.0

> make some changes to the store/configureStore.js

	import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
	import expensesReducer from '../reducers/expenses';
	import filtersReducer from '../reducers/filters';
	import thunk from 'redux-thunk';

	// add enhancers
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	export default () => {
	  const store = createStore(
	    combineReducers({
	      expenses: expensesReducer,
	      filters: filtersReducer
	    }),
	    // use the enhancers with thunk
	    composeEnhancers(applyMiddleware(thunk))
	  );

	  return store;
	};

> Edit firebase/firebase.js

	import * as firebase from "firebase";

	 const config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""
	};

	firebase.initializeApp(config);

	const database = firebase.database();

	export { firebase, database as default };

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

> AddExpensePage

	import React from 'react';
	import { connect } from 'react-redux';
	import ExpenseForm from './ExpenseForm';
	import { startAddExpense } from '../actions/expenses';

	export class AddExpensePage extends React.Component {
	  onSubmit = (expense) => {
	    this.props.startAddExpense(expense);
	    this.props.history.push('/');
	  };
	  render() {
	    return (
	      <div>
	        <h1>Add Expense</h1>
	        <ExpenseForm
	          onSubmit={this.onSubmit}
	        />
	      </div>
	    );
	  }
	}

	const mapDispatchToProps = (dispatch) => ({
	  startAddExpense: (expense) => dispatch(startAddExpense(expense))
	});

	export default connect(undefined, mapDispatchToProps)(AddExpensePage);
