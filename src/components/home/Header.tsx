import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { headerText } from './headerText';
import { setBanner } from '../../actions/headerData';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';

interface HeaderProps {
	setBanner: (val: string) => any;
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
	headerData: {
		data: any;
	};
}

const Header = ({ setBanner, headerData: { data }, setModalState, setCategory }: HeaderProps) => {
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
									{item.text.map((par: any, i: number) => {
										return !par.link ? (
											<p key={i}>{par.par}</p>
										) : (
											<p>
												{par.par}{' '}
												<button
													onClick={() => {
														setModalState(true);
														setCategory(item.title);
													}}
												>
													{par.link}
												</button>
											</p>
										);
									})}
								</>
							);
						})}
				</div>
				<div className={headerStyle.right_col}>
					<iframe
						src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F219579154045%2Fvideos%2F220960035794818%2F&show_text=0&width=560"
						scrolling="no"
						allowTransparency={true}
						allowFullScreen={true}
					></iframe>
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
		bannerData: state.headerData.banner,
		modalState: state.modalState,
	};
};

export default connect(mapStateToProps, { setBanner, setModalState, setCategory })(Header);
