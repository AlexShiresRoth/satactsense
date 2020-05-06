import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import EmailSignup from '../signup/EmailSignup';
import Video from '../video/Video';
import Bio from '../bio/Bio';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import { setHeaderData } from '../../actions/headerData';
import { connect } from 'react-redux';

interface HopkinsProps {
	setHeaderData: (val: string) => any;
}

const HopkinsPage = ({ setHeaderData }: HopkinsProps) => {
	useEffect(() => {
		setHeaderData('CTY');
	}, [setHeaderData]);

	return (
		<Layout>
			<Nav />
			<Header />
			<EmailSignup />
			<Video />
			<Bio />
			<Testimonials />
			<Footer />
		</Layout>
	);
};

export default connect(null, { setHeaderData })(HopkinsPage);
