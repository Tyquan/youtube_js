import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>Portfolio</h1>
			<NavLink to="/">Home Page</NavLink>
			<NavLink to="/portfolio">Portfolio Page</NavLink>
			<NavLink to="/contact">Contact Page</NavLink>
		</header>
	);
};

export default Header;