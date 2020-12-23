import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

interface Props {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const SatPage = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		setHeaderData('SAT');
		const findBannerData = headerText.filter((item) => item.id === 'SAT')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'SAT',
		description: 'SAT test tutoring',
		path: 'sat',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(SatPage);
