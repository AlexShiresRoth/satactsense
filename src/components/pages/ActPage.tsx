import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
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

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);
	const pageInfo = {
		pageTitle: 'ACT',
		description: 'ACT test tutoring',
		path: 'act',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(ActPage);
