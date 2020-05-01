import React, { useEffect, useState, useRef } from 'react';
import headerStyle from './Header.module.scss';
import Copy from './Copy';
import LoadingSpinner from '../reusable/LoadingSpinner';
import { headerText } from './headerText';
import { setBanner, setRef } from '../../actions/headerData';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
import { socialIcons } from '../reusable/icons';

interface HeaderProps {
	setBanner: (val: string) => any;
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
	headerData: {
		data: any;
		loading: boolean;
	};
	setRef: (val: any) => any;
}

const Header = ({ setBanner, setRef, headerData: { data, loading }, setModalState, setCategory }: HeaderProps) => {
	const [slideStart, setSlideStart] = useState(0);

	const headerRef = useRef(null);

	useEffect(() => {
		setBanner(headerText.filter((item) => item.id === data)[0].banner);
		setRef(headerRef);
		setSlideStart(0);
	}, [data, setBanner, headerRef, setRef]);
	return (
		<header className={headerStyle.header} ref={headerRef}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					{loading ? (
						<LoadingSpinner />
					) : (
						<Copy
							headerText={headerText}
							setSlideStart={setSlideStart}
							slideStart={slideStart}
							data={data}
							setModalState={setModalState}
							setCategory={setCategory}
						/>
					)}
				</div>
				<div className={headerStyle.right_col}>
					<h1>
						Schedule a virtual tutoring
						<br /> consultation and get started today!
					</h1>
					<button
						onClick={() => {
							setModalState(true);
							setCategory('Virtual Tutoring Consultations');
						}}
					>
						Book now!
					</button>
					<div className={headerStyle.social}>{socialIcons}</div>
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
		bannerData: state.headerData.banner,
		modalState: state.modalState,
	};
};

export default connect(mapStateToProps, { setBanner, setModalState, setCategory, setRef })(Header);
