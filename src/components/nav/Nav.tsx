import React from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';

<<<<<<< HEAD
const Nav = (props: any) => {
	return (
		<nav className={navStyle.nav}>
			<div className={navStyle.nav__inner}>
				<h2>SATACTSENSE</h2>
			</div>
		</nav>
	);
=======
const Nav = () => {
  return <nav className={navStyle.nav}>
    <div className={navStyle.nav__inner}>
      <div className={navStyle.nav__left}>
        <a>SATACTSENSE</a>
      </div>
      <div className={navStyle.nav__right}>
        <a>Test Preparation</a>
        <a>Success Stories</a>
        <a>About Us</a>
        <a>Contact</a>
      </div>
    </div>
  </nav>;
>>>>>>> 2a3aa5ad0f60e7c98b1d36c9f91b172fe18d9d98
};

Nav.propTypes = {};

export default Nav;
