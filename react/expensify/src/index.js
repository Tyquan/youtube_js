import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
	description: 'Water Bill',
	amount: 10000,
	createdAt: 1000
}));
store.dispatch(addExpense({
	description: 'Gas Bill',
	amount: 10500,
	createdAt: 3000
}));
// filter only things with water
store.dispatch(setTextFilter('bill'));

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