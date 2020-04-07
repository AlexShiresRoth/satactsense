import React from 'react';
import PropTypes from 'prop-types';

type NavProps = {
	subject: any;
	key: number;
};

const DropDownMenu = ({ subject, key }: NavProps) => {
	const data = [{}];
	console.log(subject, key);
	return <></>;
};

DropDownMenu.propTypes = {};

export default DropDownMenu;
