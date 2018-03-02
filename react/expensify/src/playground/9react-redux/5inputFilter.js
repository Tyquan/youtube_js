/*
	Controlled Inputs for Filters
*/

// ./components/ExpenseListFilters.js
import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props) => (
	<div>
		<input type="text" value={props.filters.text} onChange={(e) => {
			props.dispatch(setTextFilter(e.target.value));
			console.log(e.target.value);
		}} />
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
}
export default connect(mapStateToProps)(ExpenseListFilters);






// ./components/ExpenseDashboardPage.js
import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
	return (
		<div>
			<ExpenseListFilters />
			<ConnectedExpenseList />
		</div>
	);
};

export default ExpenseDashboardPage;



// Remove data from the store via a button
// ./components/ExpenseListItem.js
import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>${amount} - {createdAt}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }));
		}}>
			Remove
		</button>
	</div>
);

export default connect()(ExpenseListItem);