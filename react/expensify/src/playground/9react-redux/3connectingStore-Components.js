
// yarn add react-redux@5.0.5

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();





// listing expenses
// ./components/ExpensesList.js
import React from 'react';
import { connect } from 'react-redux';
const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.filters.text}
		{props.expenses.length}
	</div>
);
const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
		filters: state.filters
	};
}
// higher order component
export default connect(mapStateToProps)(ExpenseList);