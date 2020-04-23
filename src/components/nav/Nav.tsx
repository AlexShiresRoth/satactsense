import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';
import Menu from './Menu';
import Modal from '../contact/Modal';
import Faq from './Faq';
import MobileNav from './MobileNav';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { serviceLinks } from './subjectArray';
import { setHeaderData } from '../../actions/headerData';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';

interface NavProps {
	setHeaderData: (current: string) => any;
	headerData?: any;
	data?: string;
	bannerData?: string;
	setModalState: (val: boolean) => any;
	setCategory: (item: string) => any;
}

const Nav = ({ setHeaderData, headerData: { data, bannerData }, setModalState, setCategory }: NavProps) => {
	const logo = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
			alt="logo"
		/>
	);

	const [current, setCurrent] = useState('AP');

	const handleCurrentChange = (e: React.MouseEvent, item: string) => {
		e.stopPropagation();
		setCurrent(item);
	};

	useEffect(() => {
		setHeaderData(current);
	}, [current, data, setHeaderData]);

	return (
		<nav className={navStyle.nav}>
			<Modal />
			<div className={navStyle.nav__inner}>
				<div className={navStyle.tier}>
					<div className={navStyle.left}>
						{logo}
						<div>
							<h2>SATACTSENSE</h2>
							<p>Making Sense of the SAT/ACT</p>
						</div>
					</div>
					<div className={navStyle.nav_contact}>
						<Faq logo={logo} />
						<button
							onClick={() => {
								setModalState(true);
								setCategory('General Tutoring');
							}}
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
				<MobileNav subjectTabs={serviceLinks} handleCurrentChange={handleCurrentChange} />
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
					<Menu current={current} />
				</div>
				<div className={navStyle.tier}>
					<div className={navStyle.banner}>
						<div className={navStyle.banner_container}>
							<h2>{bannerData}</h2>
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

export default connect(mapStateToProps, { setHeaderData, setModalState, setCategory })(Nav);
