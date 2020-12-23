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

const PsatPlanPage = ({ setHeaderData, setBanner }: Props) => {
	useEffect(() => {
		setHeaderData('PSAT/PLAN');
		const findBannerData = headerText.filter((item) => item.id === 'PSAT/PLAN')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'PSAT&PLAN',
		description: 'Tutoring for the PSAT & PLAN tests.',
		path: 'psatandplan',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(PsatPlanPage);
