import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
//import firebase from "firebase";
import { firebase } from './firebase/firebase';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	ReactDOM.render(jsx, document.getElementById('root'));
	hasRendered = true;
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(startSetExpenses()).then(() => {
		renderApp();
		if (history.location.pathname === '/') {
			history.push('/dashboard');
		}
	});
	} else {
		renderApp();
		history.push('/');
	}
});