import React from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import EmailSignup from '../signup/EmailSignup';
import Footer from '../footer/Footer';
const Home = () => {
	return (
		<Layout>
			<Nav />
			<Header />
			<EmailSignup />
			<Footer />
		</Layout>
	);
};

export default Home;
