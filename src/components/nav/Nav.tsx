import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navStyle from './Nav.module.scss';
import { MdPhoneInTalk } from 'react-icons/md';
import { GoMail } from 'react-icons/go';

const Nav = (props: any) => {
	const serviceLinks = [
		{ title: 'SAT Prep', path: '/sat' },
		{ title: 'ACT Prep', path: '/act' },
		{ title: 'AP Testing', path: '/ap' },
		{ title: "John's Hopkins Testing", path: '/jht' },
	];

	const bannerItems = [
		'Confused or stuck, with preparing for AP tests?',
		'Confused or stuck, with preparing for ACT prep?',
		'Confused or stuck, with preparing for SAT prep?',
		'Confused or stuck, with preparing for AP tests?',
		'Confused or stuck, with preparing for ACT prep?',
		'Confused or stuck, with preparing for SAT prep?',
	];

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
								<li className={navStyle.list_link}>
									<Link to={link.path}>{link.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={navStyle.tier}>
					<div className={navStyle.banner}>
						<div className={navStyle.overlay}></div>
						<div className={navStyle.banner_container}>
							{bannerItems.map((item, i) => {
								return (
									<div className={navStyle.par} key={i}>
										<p>{item}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
