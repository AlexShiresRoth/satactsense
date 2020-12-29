import React from 'react';
import PropTypes from 'prop-types';
import style from './SidePanel.module.scss';
import { MdClose } from 'react-icons/md';
interface Props {
	visible: boolean;
	handlePanel: (val: any) => any;
}

const FortyHourClass = ({ visible, handlePanel }: Props) => {
	return (
		<div className={!visible ? style.panel_hidden : style.panel}>
			<div className={style.panel__inner}>
				<div className={style.close_btn}>
					<button
						onPointerDown={(e) =>
							handlePanel((prevState: { classOne: boolean; classTwo: boolean }) => ({
								classOne: false,
								classTwo: false,
							}))
						}
					>
						Close <MdClose />{' '}
					</button>
				</div>
				<div className={style.heading}>
					<h1>10 Week Course</h1>
					<h2>40 Hours of Instructional Time</h2>
					<h3>30 Hours of Instruction, 10 Hours of Testing</h3>
				</div>
				<div className={style.body}>
					<div className={style.week_box}>
						<p>
							<strong>3.5 Hour Full-Length Diagnostic Exam</strong> (Saturday before first class)
						</p>
						<p>
							<strong>Week 1-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 2-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 3-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 4-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 5-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
						<p>
							<strong>3.5 Hour Full-Length Diagnostic exam </strong>(Saturday)
						</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 6-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 7-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 8-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 9-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
					</div>
					<div className={style.week_box}>
						<p>
							<strong>Week 10-</strong>
						</p>
						<p>1.5 Hour Class (Monday 3:30pm-5:00pm)</p>
						<p>1.5 Hour Class (Wednesday 3:30pm-5:00pm)</p>
						<p>
							<strong>3.5 Hour Full-Length Diagnostic exam </strong>(Saturday after last class)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

FortyHourClass.propTypes = {
	visible: PropTypes.bool,
	handlePanel: PropTypes.func,
};

export default FortyHourClass;
