import React from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';

const Nav = (props: any) => {
	return (
		<nav className={navStyle.nav}>
			<div className={navStyle.nav__inner}>
				<h2>SATACTSENSE</h2>
			</div>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
