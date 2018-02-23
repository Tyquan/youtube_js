import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route 
						path="/"
						exact={true}
						component={ExpenseDashboardPage}
					/>
					<Route 
						path="/create"
						exact={true}
						component={AddExpensePage}
					/>
					<Route 
						path="/edit/:id"
						exact={true}
						component={EditExpensePage}
					/>
					<Route 
						path="/help"
						exact={true}
						component={HelpPage}
					/>
					<Route
						component={NotFoundPage}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;