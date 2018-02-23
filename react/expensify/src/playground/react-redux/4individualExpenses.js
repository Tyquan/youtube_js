/*
	Rendering Individual Expenses
*/

// components/ExpenseListItem
import React from 'react';
const ExpenseListItem = ({ description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>${amount} - {createdAt}</p>
	</div>
);
export default ExpenseListItem;




// components/ExpenseList
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense} />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
}

// higher order component
export default connect(mapStateToProps)(ExpenseList);