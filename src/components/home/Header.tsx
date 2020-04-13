import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { headerText } from './headerText';
import { connect } from 'react-redux';

const Header = ({ data }: any) => {
	const bgWave = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#bbe1fa"
				fill-opacity="1"
				d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,154.7C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
			></path>
		</svg>
	);
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					{headerText
						.filter((item) => {
							return item.id === data;
						})
						.map((item) => {
							return (
								<>
									<h1>{item.title}</h1>
									{item.text.map((par, i) => {
										return <p key={i}>{par}</p>;
									})}
								</>
							);
						})}
				</div>
				<div className={headerStyle.video_container}>
					{/* <video controls>
						<source src={require('../videos/bg-video2.mp4')} type="video/mp4" />
					</video> */}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {};

const mapStateToProps = (state: any) => {
	return {
		data: state.headerData.data,
	};
};

export default connect(mapStateToProps, null)(Header);
