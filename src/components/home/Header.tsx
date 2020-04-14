import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { headerText } from './headerText';
import { setBanner } from '../../actions/headerData';
import { connect } from 'react-redux';

const Header = ({ setBanner, headerData: { data } }: any) => {
	useEffect(() => {
		setBanner(headerText.filter((item) => item.id === data)[0].banner);
	}, [data, setBanner]);
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

Header.propTypes = {
	data: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
		bannerData: state.headerData.banner,
	};
};

export default connect(mapStateToProps, { setBanner })(Header);
