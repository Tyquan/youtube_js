# Logging In With Google

> create a login page 

	import React from 'react';

	export const LoginPage = () => {
		return (
			<div>
				<p>Login Page</p>
				<button>Login</button>
			</div>
		);
	}

> Edit the <AppRouter /> routers/AppRouter.js

	import React from 'react';
	import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
	import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
	import AddExpensePage from '../components/AddExpensePage';
	import EditExpensePage from '../components/EditExpensePage';
	import HelpPage from '../components/HelpPage';
	import NotFoundPage from '../components/NotFoundPage';
	import Header from '../components/Header';
	import { LoginPage } from '../components/LoginPage';

	const AppRouter = () => (
	  <BrowserRouter>
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
	  </BrowserRouter>
	);

	export default AppRouter;



> enable google authentication in the firebase console

> edit firebase/firebase.js

	import * as firebase from "firebase";

	 const config = {
		apiKey: "AIzaSyCA-VJPuvyrwYF4QSkThkDNDR1m3wsdHK8",
		authDomain: "expensify-e0128.firebaseapp.com",
		databaseURL: "https://expensify-e0128.firebaseio.com",
		projectId: "expensify-e0128",
		storageBucket: "expensify-e0128.appspot.com",
		messagingSenderId: "384743842862"
	};

	firebase.initializeApp(config);

	const database = firebase.database();

	// google auth
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

	export { firebase, googleAuthProvider, database as default };

> create a actions/auth.js file

	import { firebase, googleAuthProvider } from '../firebase/firebase';

	export const startLogin = () => {
		return () => {
			return firebase.auth().signInWithPopup(googleAuthProvider);
		};
	};

> Edit LoginPage.js

	import React from 'react';
	import { connect } from 'react-redux';
	import { startLogin } from '../actions/auth';

	export const LoginPage = ({ startLogin }) => {
		return (
			<div>
				<p>Login Page</p>
				<button
					onClick={startLogin}
				>Login</button>
			</div>
		);
	}

	const mapDispatchToProps = (dispatch) => ({
		startLogin: () => dispatch(startLogin())
	});

	export default connect(undefined, mapDispatchToProps)(LoginPage);

> Change routes/AppRouter.js

	import React from 'react';
	import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
	import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
	import AddExpensePage from '../components/AddExpensePage';
	import EditExpensePage from '../components/EditExpensePage';
	import HelpPage from '../components/HelpPage';
	import NotFoundPage from '../components/NotFoundPage';
	import Header from '../components/Header';
	import LoginPage from '../components/LoginPage';

	const AppRouter = () => (
	  <BrowserRouter>
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
	  </BrowserRouter>
	);

	export default AppRouter;
