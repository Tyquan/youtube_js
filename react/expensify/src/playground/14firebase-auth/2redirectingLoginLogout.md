# Redirecting

	yarn add history@4.7.2

> change AppRouter

	import React from 'react';
	import { Route, Router, Switch, Link, NavLink } from 'react-router-dom';
	import createHistory from 'history/createBrowserHistory';
	import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
	import AddExpensePage from '../components/AddExpensePage';
	import EditExpensePage from '../components/EditExpensePage';
	import HelpPage from '../components/HelpPage';
	import NotFoundPage from '../components/NotFoundPage';
	import Header from '../components/Header';
	import LoginPage from '../components/LoginPage';

	export const history = createHistory();

	const AppRouter = () => (
	  <Router history={history}>
	    <div>
	      <Header />
	      <Switch>
	        <Route path="/" component={LoginPage} exact={true} />
	        <Route path="/create" component={AddExpensePage} />
	        <Route path="/edit/:id" component={EditExpensePage} />
	        <Route path="/" component={ExpenseDashboardPage} />
	        <Route path="/help" component={HelpPage} />
	        <Route component={NotFoundPage} />
	      </Switch>
	    </div>
	  </Router>
	);

	export default AppRouter;


> change app.js

	import React from 'react';
	