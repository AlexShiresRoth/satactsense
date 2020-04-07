import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss';
import Menu from './Menu';
import DropDownMenu from './DropDownMenu';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { TiSocialFacebook, TiSocialSkype, TiSocialGooglePlus, TiSocialLinkedinCircular } from 'react-icons/ti';

const Nav = (props: any) => {
	const serviceLinks = [
		{ title: 'AP/Subject Testing', path: '/ap', id: 'AP' },
		{ title: 'SAT/ACT Prep', path: '/satact', id: 'SAT/ACT' },
		{ title: 'General Tutoring', path: '/general', id: 'General' },
		{ title: 'Johns Hopkins Program for Advanced Testing', path: '/jht', id: 'Jht' },
	];

	const [current, setCurrent] = useState('AP');

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
										current === link.id
											? `${navStyle.list_link} ${navStyle.active}`
											: navStyle.list_link
									}
									onClick={() => setCurrent(link.id)}
								>
									<button>{link.title}</button>
									<DropDownMenu subject={link.title} key={i} />
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
