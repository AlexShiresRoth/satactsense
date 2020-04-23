import React from 'react';
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
	return (
		<Layout>
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
