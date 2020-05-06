import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';
import Menu from './Menu';
import Modal from '../contact/Modal';
import Faq from './Faq';
import MobileNav from './MobileNav';
import { MdPhoneInTalk, MdModeComment } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { AiFillAlert } from 'react-icons/ai';
import { serviceLinks, subjectArray } from './subjectArray';
import { setHeaderData } from '../../actions/headerData';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface NavProps {
	setHeaderData: (current: string) => any;
	headerData?: any;
	data?: string;
	bannerData?: string;
	setModalState: (val: boolean) => any;
	setCategory: (item: string) => any;
	ref?: any;
}

const Nav = ({ setHeaderData, headerData: { data, bannerData }, setModalState, setCategory }: NavProps) => {
	const logo = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
			alt="logo"
		/>
	);

	const [isMobile, setMobile] = useState(window.innerWidth <= 600);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 600);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<nav className={navStyle.nav}>
			<Modal />
			<div className={navStyle.nav__inner}>
				<div className={navStyle.tier}>
					<div className={navStyle.left}>
						<Link to="/landing">{logo}</Link>
						<div>
							<h2>SATACTSENSE</h2>
							<p>Making Sense of the SAT/ACT</p>
						</div>
					</div>
					<div className={navStyle.nav_contact}>
						<Faq logo={logo} isMobile={isMobile} />
						{!isMobile ? (
							<>
								<button
									onClick={() => {
										setModalState(true);
										setCategory('General Tutoring');
									}}
								>
									{' '}
									<GoMail /> Book Now
								</button>
								<a href="tel:516-509-3186">
									<MdPhoneInTalk />
									516-509-3186
								</a>
							</>
						) : (
							<>
								<button
									onClick={() => {
										setModalState(true);
										setCategory('General Tutoring');
									}}
								>
									{' '}
									<GoMail />
								</button>
								<a href="tel:516-509-3186">
									<MdPhoneInTalk />
									516-509-3186
								</a>
							</>
						)}
					</div>
				</div>
				<MobileNav subjectTabs={serviceLinks} />

				<div className={navStyle.tier}>
					<ul className={navStyle.grid}>
						{serviceLinks.map((link, i) => {
							return (
								<li
									className={
										data === link.id
											? `${navStyle.list_link} ${navStyle.active}`
											: navStyle.list_link
									}
								>
									<Link to={link.path}>
										<button>{link.title}</button>
									</Link>
									<div className={navStyle.dropdown_container}>
										{link.dropdown.map((item, i) => {
											return item.title !== '' ? (
												<Link to={item.path}>
													<button key={i}>{item.title}</button>
												</Link>
											) : null;
										})}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={navStyle.tier}>
					<div className={navStyle.banner}>
						<div className={navStyle.banner_container}>
							<h2>
								<AiFillAlert /> {bannerData}
							</h2>
							{subjectArray
								.filter((item) => item.id === data)
								.map((item) => {
									return item.types.length > 0 ? (
										<p>
											<MdModeComment />
											Select a tab below to contact us on that particular subject.
										</p>
									) : null;
								})}
						</div>
					</div>
				</div>

				<div className={navStyle.tier}>
					<Menu current={data} />
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
