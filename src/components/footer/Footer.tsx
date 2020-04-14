import React from 'react';
import footerStyle from './Footer.module.scss';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';
import { MdPhoneInTalk, MdMail } from 'react-icons/md';
const Footer = (props: any) => {
	const zoomLogo = (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/85px-Zoom_Communications_Logo.svg.png"
			alt="zoom logo"
		/>
	);
	return (
		<footer className={footerStyle.footer}>
			<div className={footerStyle.row}>
				<p>SATACTSENSE &copy; 2020</p>
				<p>
					Find us on: {` `} <a href="#!">{zoomLogo}</a>
					<TiSocialSkype />
					<a
						href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TiSocialFacebookCircular />
					</a>
				</p>
				<p>
					Website Design & Development by{' '}
					<a
						className={footerStyle.link}
						href="https://fillthevoid.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						fillthevoid.io
					</a>
				</p>
			</div>
			<div className={footerStyle.row}>
				<div className={footerStyle.col}>
					<h4>CONTACT</h4>
					<a href="mailto:satactsense@gmail.com">
						<MdMail />
						satactsense@gmail.com
					</a>
					<a href="tel:516-509-3186">
						<MdPhoneInTalk />
						516-509-3186
					</a>
				</div>
				<div className={footerStyle.col}>
					<h4>SERVICES</h4>
					<p>AP/Subject Testing</p>
					<p>SAT/ACT Prep</p>
					<p>General Tutoring</p>
					<p>Johns Hopkins program for Advanced Testing</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
