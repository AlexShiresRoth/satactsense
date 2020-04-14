import React, { ReactNode } from 'react';
import layoutStyle from './Layout.module.scss';

const Home: React.FunctionComponent<{
	children: ReactNode;
}> = (props) => {
	return (
		<main className={layoutStyle.main}>
			<div className={layoutStyle.main__container}>{props.children}</div>
		</main>
	);
};

export default Home;
