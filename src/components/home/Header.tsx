import React, { useEffect, useState } from 'react';
import headerStyle from './Header.module.scss';
import Copy from './Copy';
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

	const [slideStart, setSlideStart] = useState(0);

	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.grid}>
				<div className={headerStyle.copy}>
					<Copy
						headerText={headerText}
						setSlideStart={setSlideStart}
						slideStart={slideStart}
						data={data}
						setModalState={setModalState}
						setCategory={setCategory}
					/>
				</div>
				<div className={headerStyle.right_col}>
					<h1>Schedule a free virtual tutoring session!</h1>
					<button
						onClick={() => {
							setModalState(true);
							setCategory('Virtual Tutoring Session');
						}}
					>
						Book now!
					</button>
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
