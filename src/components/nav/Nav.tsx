import React from "react";
import PropTypes from "prop-types";
import navStyle from './Nav.module.scss';

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
};

Nav.propTypes = {};

export default Nav;
