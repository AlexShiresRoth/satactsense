import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = (props: any) => {
	return <header className={headerStyle.header}></header>;
};

Header.propTypes = {};

export default Header;
