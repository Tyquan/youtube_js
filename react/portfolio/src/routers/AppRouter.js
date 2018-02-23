import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import ShowPortfolioOptionPage from '../components/ShowPortfolioOptionPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route 
						path="/"
						exact={true}
						component={HomePage}
					/>
					<Route 
						path="/portfolio"
						exact={true}
						component={PortfolioPage}
					/>
					<Route
						path="/portfolio/:id"
						exact={true}
						component={ShowPortfolioOptionPage}
					/>
					<Route 
						path="/contact"
						exact={true}
						component={ContactPage}
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