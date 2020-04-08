import React, { useState } from 'react';
import navStyle from './Nav.module.scss';
import Menu from './Menu';
import Modal from '../contact/Modal';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';

const Nav = (props: any) => {
	const serviceLinks = [
		{ title: 'AP/Subject Testing', path: '/ap', id: 'AP' },
		{ title: 'SAT/ACT Prep', path: '/satact', id: 'SAT/ACT' },
		{ title: 'General Tutoring', path: '/general', id: 'General' },
		{ title: 'Johns Hopkins Program for Advanced Testing', path: '/jht', id: 'Jht' },
	];

	const [current, setCurrent] = useState('AP');

	const [modalState, setModalState] = useState({
		isModalVisible: false,
		category: '',
	});

	const { isModalVisible, category } = modalState;

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
						<h2>SATACTSENSE</h2>
						<p>SAT/ACT/AP Test Tutoring</p>
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
							555-555-5555
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
									onClick={() => setCurrent(link.id)}
								>
									<button>{link.title}</button>
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
						<h2>Are you ready for the new VIRTUAL AP exam?</h2>
						<div className={navStyle.social}>
							<TiSocialSkype />
							<a
								href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
								target="_blank"
								rel="noopener noreferrer"
							>
								<TiSocialFacebookCircular />
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
