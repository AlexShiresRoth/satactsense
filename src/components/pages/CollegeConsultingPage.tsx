import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../home/Header';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

interface CollegeProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const CollegeConsultingPage = ({ setHeaderData, setBanner }: CollegeProps) => {
	useEffect(() => {
		setHeaderData('CCLC');
		const findBannerData = headerText.filter((item) => item.id === 'CCLC')[0].banner;
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'College Consulting & Life Coaching',
		description: 'College consulting and life coaching',
		path: 'collegeconsulting',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Header />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(CollegeConsultingPage);
