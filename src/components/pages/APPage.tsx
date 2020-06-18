import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import EmailSignup from '../signup/EmailSignup';
import Video from '../video/Video';
import Bio from '../bio/Bio';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';
import Action from '../action/Action';

interface ApProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const APPage = ({ setHeaderData, setBanner }: ApProps) => {
	useEffect(() => {
		const findBannerData = headerText.filter((item) => item.id === 'AP')[0].banner;
		setHeaderData('AP');
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'AP',
		description: 'AP tests tutoring',
		path: 'ap',
	};

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

export default connect(null, { setHeaderData, setBanner })(APPage);
