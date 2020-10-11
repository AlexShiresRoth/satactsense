import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EmailSignup from '../signup/EmailSignup';
import Bio from '../bio/Bio';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';
import Action from '../action/Action';
import ActMaterials from '../actmaterials/ActMaterials';
import Video from '../video/Video';

interface ActPageProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const ACTMaterials = ({ setHeaderData, setBanner }: ActPageProps) => {
	useEffect(() => {
		const findBannerData = headerText.filter((item) => item.id === 'ACTMAT')[0].banner;
		setHeaderData('ACTMAT');
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'ACT',
		description: 'ACT materials for tutoring',
		path: 'act',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<ActMaterials />
			<EmailSignup />
			<Testimonials />
			<Video />
			<Bio />
			<Action />
			<Footer />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(ACTMaterials);