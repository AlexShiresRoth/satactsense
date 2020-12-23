import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';

const Home = () => {
	const pageInfo = {
		pageTitle: 'Home',
		description: 'Landing page',
		path: '',
	};
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);
	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default Home;
