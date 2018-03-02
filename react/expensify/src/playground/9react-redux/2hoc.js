/*
 Higher order components - A component that renders another component
 1. Reuse Code
 2. Prop Manipulation
 3. Abstract State
*/

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const Info = (props) => {
	return (
		<div>
			<h1>Info</h1>
			<p>The info is: {props.info}</p>
		</div>
	);
};

const withAdminWarning = (WrappedComponent) => {
	// higher order component
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is private info please dont share</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	// higher order component
	return (props) => (
		<div>
			{ props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>You are not Authenticated. Please Login</p> 
			)
			}
			
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Admin Page Clear WELCOME!" />, document.getElementById('root'));
registerServiceWorker();