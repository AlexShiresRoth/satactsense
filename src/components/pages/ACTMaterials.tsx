import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import { headerText } from '../reusable/headerText';
import { setHeaderData, setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';
import ActMaterials from '../actmaterials/ActMaterials';

interface ActPageProps {
	setHeaderData: (val: string) => any;
	setBanner: (val: string) => any;
}

const ACTMaterials = ({ setHeaderData, setBanner }: ActPageProps) => {
	useEffect(() => {
		const findBannerData = headerText.filter((item) => item.id === 'ACTMAT')[0].banner;
		setHeaderData('ACTMAT');
		setBanner(findBannerData);
	}, [setHeaderData, setBanner]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);
	}, []);

	const pageInfo = {
		pageTitle: 'ACT',
		description: 'ACT materials for tutoring',
		path: 'act',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<ActMaterials />
		</Layout>
	);
};

export default connect(null, { setHeaderData, setBanner })(ACTMaterials);
