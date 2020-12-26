import React, { useState } from 'react';
import style from './ClassSchedule.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import { AiFillSchedule, AiOutlineSchedule } from 'react-icons/ai';
import TwentyFiveHoursPanel from './TwentyFiveHoursPanel';
import FortyHourClass from './FortyHourClass';
import { setCategory, setModalState } from '../../actions/modal';
import { connect } from 'react-redux';

interface Props {
	setModalState: (val: boolean) => any;
	setCategory: (category: string) => any;
}

const ClassSchedule = ({ setModalState, setCategory }: Props) => {
	const [deetsVisible, showDeets] = useState<any>({
		classOne: false,
		classTwo: false,
	});
	const { classOne, classTwo } = deetsVisible;
	return (
		<>
			<TwentyFiveHoursPanel visible={classOne} handlePanel={showDeets} />
			<FortyHourClass visible={classTwo} handlePanel={showDeets} />
			<section className={style.section}>
				<div className={style.heading}>
					<h2>We offer two SAT prep classes</h2>
					<div className={style.divider}></div>
				</div>
				<div className={style.inner_grid}>
					<div className={style.col} style={classOne ? { boxShadow: '0 0px 0px 10px #1a3a6d94' } : {}}>
						<div className={style.col__heading}>
							<h3>
								25 hours
								<br />
								Weekday Class{' '}
							</h3>
							<div className={style.divider}></div>
						</div>
						<div className={style.details}>
							<AiOutlineSchedule className={style.icon} />

							<p>
								Weekdays, 6-week, SAT CLASS <br /> Twice a Week (Monday & Wednesday)
							</p>
							<button
								onPointerDown={(e) =>
									showDeets((prevState: { classOne: boolean; classTwo: boolean }) => ({
										classOne: !prevState.classOne,
										classTwo: false,
									}))
								}
							>
								Schedule{' '}
								<FaChevronRight
									style={{
										transform: `${classOne ? 'rotate(180deg)' : 'rotate(0deg)'} `,
										transition: 'all 1s ease',
									}}
								/>
							</button>
						</div>

						<div className={style.button_container}>
							<button
								onPointerDown={(e) => {
									setModalState(true);
									setCategory('25 Hour SAT Class');
								}}
							>
								Contact Us
							</button>
						</div>
					</div>
					<div className={style.col} style={classTwo ? { boxShadow: '0 0px 0px 10px #44cf6bb9' } : {}}>
						<div className={style.col__heading}>
							<h3>
								40 hours
								<br />
								Weekday Class{' '}
							</h3>
							<div className={style.divider}></div>
						</div>
						<div className={style.details}>
							<AiFillSchedule className={style.icon} />
							<p>
								Weekday, 10-week, SAT CLASS <br /> Twice a Week (Monday & Wednesday)
							</p>
							<button
								onPointerDown={(e) =>
									showDeets((prevState: { classOne: boolean; classTwo: boolean }) => ({
										classOne: false,
										classTwo: !prevState.classTwo,
									}))
								}
							>
								Schedule{' '}
								<FaChevronRight
									style={{
										transform: `${classTwo ? 'rotate(180deg)' : 'rotate(0deg)'} `,
										transition: 'all 1s ease',
									}}
								/>
							</button>
						</div>

						<div className={style.button_container}>
							<button
								onPointerDown={(e) => {
									setModalState(true);
									setCategory('40 Hour SAT Class');
								}}
							>
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default connect(null, { setModalState, setCategory })(ClassSchedule);
