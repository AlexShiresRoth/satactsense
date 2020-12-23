import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../landing/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

interface Props {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const Landing = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		setHeaderData('LANDING');
		const findBannerData = headerText.filter((item) => item.id === 'LANDING')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'Home',
		description: 'Landing Page for SATACTSENSE',
		path: '',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(Landing);
