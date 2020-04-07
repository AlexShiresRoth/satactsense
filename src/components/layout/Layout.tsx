import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import layoutStyle from './Layout.module.scss';

const Home: React.FunctionComponent<{
	children: ReactNode;
}> = (props) => {
	console.log(props);
	return (
		<main className={layoutStyle.main}>
			<div className={layoutStyle.main__container}>{props.children}</div>
		</main>
	);
};

Home.propTypes = {};

export default Home;
