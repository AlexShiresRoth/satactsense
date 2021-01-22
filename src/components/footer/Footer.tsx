import React from 'react';
import footerStyle from './Footer.module.scss';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';
import { MdPhoneInTalk, MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
				<div className={footerStyle.col}>
					<h4>SITE</h4>
					<Link to="/">Home</Link>
					<Link to="/ap">AP Testing</Link>
					{/* <Link to="/sattwo">SAT II Subject Test</Link> */}
					<Link to="/sat">SAT prep</Link>
					<Link to="/act">ACT Prep</Link>
					<Link to="/general">General Tutoring</Link>
					<Link to="/psatandplan">PSAT/PLAN</Link>
					<Link to="/johnshopkins">Johns Hopkins program for Advanced Testing</Link>
					<Link to="/collegeconsulting">College Consulting and Life Coaching</Link>
				</div>
				<div className={footerStyle.col}>
					<h4>Resources</h4>
					<Link to="/satmaterials">SAT Materials</Link>
					<Link to="/actmaterials">ACT Materials</Link>

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
					<h4>SATACTSENSE &copy; 2020</h4>
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
			</div>
		</footer>
	);
};

export default Footer;
