import React, { useEffect, useState, useRef } from 'react';
import headerStyle from './Header.module.scss';
import Copy from './Copy';
import { headerText } from './headerText';
import { setBanner, setRef } from '../../actions/headerData';
import { setModalState, setCategory } from '../../actions/modal';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';
import { connect } from 'react-redux';

interface HeaderProps {
	setBanner: (val: string) => any;
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
	headerData: {
		data: any;
	};
	setRef: (val: any) => any;
}

const Header = ({ setBanner, setRef, headerData: { data }, setModalState, setCategory }: HeaderProps) => {
	const [slideStart, setSlideStart] = useState(0);

	const headerRef = useRef(null);

	const zoomLogo = (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/85px-Zoom_Communications_Logo.svg.png"
			alt="zoom logo"
		/>
	);

	const socialIcons = (
		<>
			<a
				href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
				target="_blank"
				rel="noopener noreferrer"
			>
				<TiSocialFacebookCircular />
			</a>
			<a
				href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
				target="_blank"
				rel="noopener noreferrer"
			>
				<TiSocialSkype />
			</a>
			<a
				href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
				target="_blank"
				rel="noopener noreferrer"
			>
				{zoomLogo}
			</a>
		</>
	);
	useEffect(() => {
		setBanner(headerText.filter((item) => item.id === data)[0].banner);
		setRef(headerRef);
	}, [data, setBanner, headerRef, setRef]);
	return (
		<header className={headerStyle.header} ref={headerRef}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					<Copy
						headerText={headerText}
						setSlideStart={setSlideStart}
						slideStart={slideStart}
						data={data}
						setModalState={setModalState}
						setCategory={setCategory}
					/>
				</div>
				<div className={headerStyle.right_col}>
					<h1>
						Schedule a virtual tutoring
						<br /> consultation and get started today!
					</h1>
					<button
						onClick={() => {
							setModalState(true);
							setCategory('Virtual Tutoring Consultation');
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
