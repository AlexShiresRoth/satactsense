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

interface ActPageProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const ActPage = ({ setHeaderData, setBanner }: ActPageProps) => {
	useEffect(() => {
		const findBannerData = headerText.filter((item) => item.id === 'ACT')[0].banner;
		setHeaderData('ACT');
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

export default connect(null, { setHeaderData, setBanner })(ActPage);
