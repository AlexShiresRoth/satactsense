import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../home/Header';
import EmailSignup from '../signup/EmailSignup';
import Bio from '../bio/Bio';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';
import Action from '../action/Action';
import Video from '../video/Video';

interface CollegeProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const CollegeConsultingPage = ({ setHeaderData, setBanner }: CollegeProps) => {
	useEffect(() => {
		setHeaderData('CCLC');
		const findBannerData = headerText.filter((item) => item.id === 'CCLC')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'College Consulting & Life Coaching',
		description: 'College consulting and life coaching',
		path: 'collegeconsulting',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<Header />
			<EmailSignup />
			<Testimonials />
			<Video />
			<Bio />
			<Action />
			<Footer />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(CollegeConsultingPage);
