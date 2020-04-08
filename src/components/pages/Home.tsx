import React, { ReactComponentElement } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import EmailSignup from '../signup/EmailSignup';
const Home = () => {
	return (
		<Layout>
			<Nav />
			<Header />
			<EmailSignup />
		</Layout>
	);
};

Home.propTypes = {};

export default Home;
