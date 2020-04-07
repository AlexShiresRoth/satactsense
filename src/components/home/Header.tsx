import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = (props: any) => {
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					<h1>AP Testing</h1>
					<p>Is the new structure and format confusing?</p>
					<p>
						Our experienced AP tours/instructors can help navigate you through the material and the online
						format of the AP exam.
					</p>
					<p>
						We can offer remote tutoring for a variety of the exams based on the student's availability,
						scheduling, and skillset.
					</p>
					<p>Click the ones that apply</p>
				</div>
				<div className={headerStyle.video_container}>
					<video controls>
						<source src={require('../videos/bg-video2.mp4')} type="video/mp4" />
					</video>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
