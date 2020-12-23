import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ClassSchedule.module.scss';
import { FaChevronRight } from 'react-icons/fa';

const ClassSchedule = (props: any) => {
	const [deetsVisible, showDeets] = useState(false);

	return (
		<section className={style.section}>
			<div className={style.heading}>
				<h2>We offer two SAT prep classes</h2>
				<div className={style.divider}></div>
			</div>
			<div className={style.inner_grid}>
				<div className={style.col}>
					<div className={style.col__heading}>
						<h3>
							25 hours
							<br />
							Weekday Class{' '}
						</h3>
						<div className={style.divider}></div>
					</div>
					<div className={style.details}>
						<p>
							Weekdays, 6-week, SAT CLASS <br /> Twice a Week (Monday & Wednesday)
						</p>
						<a onPointerDown={(e) => showDeets(!deetsVisible)}>
							More Details <FaChevronRight />
						</a>
					</div>

					<div className={style.button_container}>
						<button>Contact Us</button>
					</div>
				</div>
				<div className={style.col}>
					<div className={style.col__heading}>
						<h3>
							40 hours
							<br />
							Weekday Class{' '}
						</h3>
						<div className={style.divider}></div>
					</div>
					<div className={style.details}>
						<p>
							Weekday, 10-week, SAT CLASS <br /> Twice a Week (Monday & Wednesday)
						</p>
						<p>
							More Details <FaChevronRight />
						</p>
					</div>

					<div className={style.button_container}>
						<button>Contact Us</button>
					</div>
				</div>
			</div>
		</section>
	);
};

ClassSchedule.propTypes = {};

export default ClassSchedule;
