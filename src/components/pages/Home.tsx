import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import Video from '../video/Video';
import Bio from '../bio/Bio';
import EmailSignup from '../signup/EmailSignup';
import Testimonials from '../testimonials/Testimonials';
import Action from '../action/Action';
import Footer from '../footer/Footer';

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
			<Nav />
			<Header />
			<EmailSignup />
			<Video />
			<Bio />
			<Testimonials />
			<Action />
			<Footer />
		</Layout>
	);
};

export default Home;
