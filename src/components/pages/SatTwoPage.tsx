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

const SatTwoPage = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		setHeaderData('SUBJECT');
		const findBannerData = headerText.filter((item) => item.id === 'SUBJECT')[0].banner;
		setBanner(findBannerData);
	}, [setBanner, setHeaderData]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'SAT II Subject Test',
		description: 'Tutoring for the SAT II Subject Test',
		path: 'sattwo',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(SatTwoPage);
