# Remove Expense

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

	export const startRemoveExpense = ({ id } = {}) => {
	  return (dispatch) => {
	    return database.ref(`expenses/${id}`).remove().then(() => {
	      dispatch(removeExpense({ id }));
	    });
	  };
	};


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

> Edit the EditExpensePage.js

	import React from 'react';
	import { connect } from 'react-redux';
	import ExpenseForm from './ExpenseForm';
	import { editExpense, startRemoveExpense } from '../actions/expenses';

	export class EditExpensePage extends React.Component {
	  onSubmit = (expense) => {
	    this.props.editExpense(this.props.expense.id, expense);
	    this.props.history.push('/');
	  };
	  onRemove = () => {
	    this.props.startRemoveExpense({ id: this.props.expense.id });
	    this.props.history.push('/');
	  };
	  render() {
	    return (
	      <div>
	        <ExpenseForm
	          expense={this.props.expense}
	          onSubmit={this.onSubmit}
	        />
	        <button onClick={this.onRemove}>Remove</button>
	      </div>
	    );
	  }
	};

	const mapStateToProps = (state, props) => ({
	  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	});

	const mapDispatchToProps = (dispatch, props) => ({
	  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
	});

	export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

