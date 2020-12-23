import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

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
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(APPage);
