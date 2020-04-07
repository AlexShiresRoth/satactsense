import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = (props: any) => {
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					<h1>
						Are you tired and stressed from preparing for upcoming exams, like the AP/Subject Tests? If so
						look no further, SATACTSENSE has a quick and painless way of getting you in touch with a tutor!
					</h1>
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
