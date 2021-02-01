import React, { useEffect } from 'react';
import landingStyle from './Header.module.scss';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
// import { GoMail } from 'react-icons/go';
import { Link } from 'react-router-dom';

interface Props {
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
	modal: {
		modalState: boolean;
	};
}

const Landing = ({ setModalState, setCategory, modal: { modalState } }: Props) => {
	useEffect(() => {
		//hide background scrolling on modal being open
		const handleModalOpen = () => {
			const html = document.querySelector('html');
			return modalState && html !== null
				? (html.style.overflowY = 'hidden')
				: html !== null
				? (html.style.overflowY = 'scroll')
				: null;
		};
		handleModalOpen();
	}, [modalState]);

	return (
		<header className={landingStyle.header}>
			<div className={landingStyle.overlay}></div>
			<div className={landingStyle.col}>
				<div>
					<h1>Tired of wasting time with “free tutoring consultations?”</h1>
					<p>
						If your son or daughter is serious about preparing for the SAT or ACT? Schedule your FREE 30
						minute trial lesson, and see if they qualify for our intensive SAT/ACT Complete Preparation
						Program.{' '}
					</p>
					<p>Book your first No-Commitment Virtual Lesson Today.</p>
				</div>
				<div className={landingStyle.btn_row}>
					<Link to="/satandact">
						<button>Learn More</button>
					</Link>
					<button
						onClick={() => {
							setModalState(true);
							setCategory('Virtual Tutoring Consultations');
						}}
					>
						Book Your Free Lesson
					</button>
				</div>
			</div>
			<div></div>
		</header>
	);
};

const mapStateToProps = (state: any) => {
	return {
		modal: state.modal,
	};
};

export default connect(mapStateToProps, { setModalState, setCategory })(Landing);
