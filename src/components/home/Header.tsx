import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { headerText } from './headerText';
import { connect } from 'react-redux';

const Header = ({ data }: any) => {
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
					<video controls>
						<source src={require('../videos/bg-video2.mp4')} type="video/mp4" />
					</video>
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
