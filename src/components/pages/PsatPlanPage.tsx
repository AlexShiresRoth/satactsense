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

interface Props {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const PsatPlanPage = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		setHeaderData('PSAT/PLAN');
		const findBannerData = headerText.filter((item) => item.id === 'PSAT/PLAN')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);
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

export default connect(null, { setHeaderData, setBanner })(PsatPlanPage);
