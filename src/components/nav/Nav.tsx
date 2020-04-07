import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { TiSocialFacebook, TiSocialSkype, TiSocialGooglePlus, TiSocialLinkedinCircular } from 'react-icons/ti';

const Nav = (props: any) => {
	const serviceLinks = [
		{ title: 'AP/Subject Testing', path: '/ap' },
		{ title: 'SAT/ACT Prep', path: '/satact' },
		{ title: 'General Tutoring', path: '/general' },
		{ title: 'Johns Hopkins Program for Advanced Testing', path: '/jht' },
	];

	const [current, setCurrent] = useState(0);

	return (
		<nav className={navStyle.nav}>
			<div className={navStyle.nav__inner}>
				<div className={navStyle.tier}>
					<div className={navStyle.left}>
						<h2>SATACTSENSE</h2>
						<p>SAT/ACT/AP Test Tutoring</p>
					</div>
					<div className={navStyle.nav_contact}>
						<button>
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
										current === i ? `${navStyle.list_link} ${navStyle.active}` : navStyle.list_link
									}
									onClick={() => setCurrent(i)}
								>
									<Link to={link.path}>{link.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={navStyle.tier}>
					<div className={navStyle.banner}>
						<h2>Are you ready for the new VIRTUAL AP exam?</h2>
						<div className={navStyle.social}>
							<TiSocialLinkedinCircular />
							<TiSocialSkype />
							<TiSocialFacebook />
							<TiSocialGooglePlus />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
