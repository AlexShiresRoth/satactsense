import React from 'react';
import { setCategory, setModalState } from '../../actions/modal';
import { connect } from 'react-redux';
import actionStyle from './Action.module.scss';

interface ActioProps {
	setCategory: (val: string) => any;
	setModalState: (val: boolean) => any;
}

const Action = ({ setCategory, setModalState }: ActioProps) => {
	return (
		<section className={actionStyle.section}>
			<p>Schedule a virtual tutoring consultation and get started today!</p>
			<button
				onClick={() => {
					setModalState(true);
					setCategory('Virtual Tutoring Consultations');
				}}
			>
				Book now!
			</button>
		</section>
	);
};

export default connect(null, { setCategory, setModalState })(Action);
