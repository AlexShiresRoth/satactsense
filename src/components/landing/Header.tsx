import React, { useEffect } from 'react';
import landingStyle from './Header.module.scss';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
import { GoMail } from 'react-icons/go';
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
					<h1>Complete Test Preparation, Made Easy.</h1>
					<p>
						SAT/ACT Sense gives students a daily itinerary for everything leading up to test day so you’re
						totally prepared, no matter your availability.{' '}
					</p>
					<p>Book your first No-Commitment Virtual Lesson Today.</p>
				</div>
				<div className={landingStyle.btn_row}>
					<Link to="/ap">
						<button>Learn More</button>
					</Link>
					<button
						onClick={() => {
							setModalState(true);
							setCategory('Virtual Tutoring Consultations');
						}}
					>
						<GoMail /> Get Your Itinerary
					</button>
				</div>
			</div>
			<div></div>
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
