import React, { useEffect } from 'react';
import landingStyle from './Header.module.scss';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
import { GoMail } from 'react-icons/go';

interface Props {
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
	modal: {
		modalState: boolean;
	};
}

const Landing = ({ setModalState, setCategory, modal: { modalState } }: Props) => {
	const handleModalOpen = () => {
		const html = document.querySelector('html');
		return modalState && html !== null
			? (html.style.overflowY = 'hidden')
			: html !== null
			? (html.style.overflowY = 'scroll')
			: null;
	};

	useEffect(() => {
		handleModalOpen();
	}, [modalState]);

	return (
		<header className={landingStyle.header}>
			<div className={landingStyle.overlay}></div>
			<div className={landingStyle.col}>
				<h1>Stressed about upcoming tests?</h1>
				<h2>We can help.</h2>

				<button
					onClick={() => {
						setModalState(true);
						setCategory('Virtual Tutoring Consultations');
					}}
				>
					<GoMail /> Book Now
				</button>

				<p>We offer virtual tutoring sessions.</p>
				<p>We tutor a vast majority of subjects.</p>
			</div>
		</header>
	);
};

const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		modal: state.modal,
	};
};

export default connect(mapStateToProps, { setModalState, setCategory })(Landing);
