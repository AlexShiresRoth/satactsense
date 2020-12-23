import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

interface HopkinsProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const HopkinsPage = ({ setHeaderData, setBanner }: HopkinsProps) => {
	useEffect(() => {
		setHeaderData('CTY');
		const findBannerData = headerText.filter((item) => item.id === 'CTY')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'Johns Hopkins',
		description: 'Tutoring for Johns Hopkins program for talented youth.',
		path: 'johnshopkins',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(HopkinsPage);
