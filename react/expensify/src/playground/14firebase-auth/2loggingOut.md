# Logging Out With Google

> edit components/Header.js

	import React from 'react';
	import { NavLink } from 'react-router-dom';

	const Header = () => (
	  <header>
	    <h1>Expensify</h1>
	    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
	    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
	  	<button>Logout</button>
	  </header>
	);

	export default Header;

> edit actions/auth.js

	import { firebase, googleAuthProvider } from '../firebase/firebase';

	export const startLogin = () => {
		return () => {
			return firebase.auth().signInWithPopup(googleAuthProvider);
		};
	};

	export const startLogout = () => {
		return () => {
			return firebase.auth().signOut();
		};
	};

> edit components/Header.js Again

	import React from 'react';
	import { NavLink } from 'react-router-dom';
	import {connect} from 'react-redux';
	import { startLogout } from '../actions/auth';

	export const Header = ({ startLogout }) => (
	  <header>
	    <h1>Expensify</h1>
	    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
	    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
	  	<button
	  		onClick={startLogout}
	  	>Logout</button>
	  </header>
	);

	const mapDispatchToProps = (dispatch) => ({
		startLogout: () => dispatch(startLogout())
	});

	export default connect(undefined, mapDispatchToProps)(Header);