import React from 'react';
import PropTypes from 'prop-types';
import style from './ClassSchedule.module.scss';

const ClassSchedule = (props: any) => {
	return (
		<section className={style.section}>
			<div className={style.heading}>
				<h2>We now offer two SAT prep classes</h2>
			</div>
			<div className={style.inner_grid}></div>
		</section>
	);
};

ClassSchedule.propTypes = {};

export default ClassSchedule;
