import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

interface GeneralProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const GeneralPage = ({ setHeaderData, setBanner }: GeneralProps) => {
	useEffect(() => {
		setHeaderData('GENERAL');
		const findBannerData = headerText.filter((item) => item.id === 'GENERAL')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'General Tutoring',
		description: 'Tutoring for any subject',
		path: 'general',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(GeneralPage);
