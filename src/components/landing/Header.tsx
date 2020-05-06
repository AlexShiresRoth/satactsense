import React from 'react';
import landingStyle from './Header.module.scss';
import { Link } from 'react-router-dom';

const Landing = (props: any) => {
	//create a function to determine the date and set the active subject depending on date
	return (
		<header className={landingStyle.header}>
			<div className={landingStyle.overlay}></div>
			<div className={landingStyle.col}>
				<h1>Stressed about upcoming tests?</h1>
				<h2>We can help.</h2>
				<Link to="/ap">
					<button>Learn More</button>
				</Link>
				<p>We offer virtual tutoring sessions.</p>
				<p>We tutor a vast majority of subjects.</p>
			</div>
		</header>
	);
};

export default Landing;
