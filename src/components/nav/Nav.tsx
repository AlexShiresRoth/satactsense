import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';
import Menu from './Menu';
import Modal from '../contact/Modal';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';
import { serviceLinks } from './subjectArray';
import { setHeaderData } from '../../actions/headerData';
import { connect } from 'react-redux';

interface NavProps {
	setHeaderData: (current: string) => any;
	headerData?: any;
	data?: string;
	bannerData?: string;
}

const Nav = ({ setHeaderData, headerData: { data, bannerData } }: NavProps) => {
	const logo = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
			alt="logo"
		/>
	);
	const zoomLogo = (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/85px-Zoom_Communications_Logo.svg.png"
			alt="zoom logo"
		/>
	);

	const [current, setCurrent] = useState('AP');

	const [modalState, setModalState] = useState({
		isModalVisible: false,
		category: '',
	});

	const { isModalVisible, category } = modalState;

	const handleCurrentChange = (e: React.MouseEvent, item: string) => {
		e.stopPropagation();
		setCurrent(item);
	};

	useEffect(() => {
		setHeaderData(current);
	}, [current, data, setHeaderData]);

	return (
		<nav className={navStyle.nav}>
			<Modal
				isModalVisible={isModalVisible}
				category={category}
				setModalState={setModalState}
				subjects={serviceLinks}
			/>
			<div className={navStyle.nav__inner}>
				<div className={navStyle.tier}>
					<div className={navStyle.left}>
						{logo}
						<h2>SATACTSENSE</h2>
						<p>Making Sense of the SAT/ACT</p>
					</div>
					<div className={navStyle.nav_contact}>
						<button
							onClick={() =>
								setModalState({
									isModalVisible: true,
									category: 'General',
								})
							}
						>
							{' '}
							<GoMail /> Contact
						</button>
						<a href="tel:555-555-5555">
							<MdPhoneInTalk />
							516-509-3186
						</a>
					</div>
				</div>
				<div className={navStyle.tier}>
					<ul className={navStyle.grid}>
						{serviceLinks.map((link, i) => {
							return (
								<li
									className={
										current === link.id
											? `${navStyle.list_link} ${navStyle.active}`
											: navStyle.list_link
									}
									onClick={(e) => handleCurrentChange(e, link.id)}
								>
									<button>{link.title}</button>
									<div className={navStyle.dropdown_container}>
										{link.dropdown.map((item, i) => {
											return item.title !== '' ? (
												<button key={i} onClick={(e) => handleCurrentChange(e, item.dropid)}>
													{item.title}
												</button>
											) : null;
										})}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={navStyle.tier}>
					<Menu
						current={current}
						isModalVisible={isModalVisible}
						category={category}
						setModalState={setModalState}
					/>
				</div>
				<div className={navStyle.tier}>
					<div className={navStyle.banner}>
						<h2>{bannerData}</h2>
						<div className={navStyle.social}>
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
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	data: PropTypes.string.isRequired,
	bannerData: PropTypes.string.isRequired,
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
	};
};

export default connect(mapStateToProps, { setHeaderData })(Nav);
