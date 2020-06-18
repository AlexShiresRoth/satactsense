import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EmailSignup from '../signup/EmailSignup';
import Video from '../video/Video';
import Bio from '../bio/Bio';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';
import Action from '../action/Action';
import SATMaterialsComponent from '../satmaterials/SATMaterialsComponent';

interface Props {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const SATMaterials = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		const findBannerData = headerText.filter((item) => item.id === 'ACTMAT')[0].banner;
		setHeaderData('SATTMAT');
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'SAT',
		description: 'SAT tutoring materials',
		path: 'sat',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<SATMaterialsComponent />
			<EmailSignup />
			<Video />
			<Bio />
			<Testimonials />
			<Action />
			<Footer />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(SATMaterials);
