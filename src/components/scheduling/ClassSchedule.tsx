import React, { useEffect, useState } from 'react';
import style from './ClassSchedule.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import { AiFillSchedule, AiOutlineSchedule } from 'react-icons/ai';
import TwentyFiveHoursPanel from './TwentyFiveHoursPanel';
import FortyHourClass from './FortyHourClass';
import { setCategory, setModalState } from '../../actions/modal';
import { connect, RootStateOrAny } from 'react-redux';

interface Props {
	setModalState: (val: boolean) => any;
	setCategory: (category: string) => any;
	modal: {
		modalState: boolean;
	};
}

const ClassSchedule = ({ setModalState, setCategory, modal: { modalState } }: Props) => {
	const [deetsVisible, showDeets] = useState<any>({
		classOne: false,
		classTwo: false,
	});
	const { classOne, classTwo } = deetsVisible;

	useEffect(() => {
		//modalstate refers to visibility of contact modal
		//if visible, hide side panels so no overlap occurrs
		if (modalState) {
			showDeets({ classOne: false, classTwo: false });
		}
	}, [modalState]);

	return (
		<>
			<TwentyFiveHoursPanel visible={classOne} handlePanel={showDeets} />
			<FortyHourClass visible={classTwo} handlePanel={showDeets} />
			<section className={style.section}>
				<div className={style.heading}>
					<h2> Now Offering Individualized SAT Prep Classes </h2>
					<div className={style.divider}></div>
				</div>
				<div className={style.inner_grid}>
					<div className={style.col} style={classOne ? { boxShadow: '0 0px 0px 10px #1a3a6d94' } : {}}>
						<div className={style.col__heading}>
							<h3>6 Week Course</h3>
							<h4>25 Hours of Instructional Time</h4>
							<div className={style.divider}></div>
						</div>
						<div className={style.details}>
							<div className={style.details__inner}>
								<AiOutlineSchedule className={style.icon} />

								<p>
									18 Hours of Instruction, 7 Hours of Testing
									<br />
									Two Full SAT Proctored Exams With Scores and Analysis
									<br />
									Twice a Week (Monday & Wednesday)
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
						</div>

						<div className={style.button_container}>
							<div className={style.button_container__inner}>
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
					</div>
					<div className={style.col} style={classTwo ? { boxShadow: '0 0px 0px 10px #f8823e93' } : {}}>
						<div className={style.col__heading}>
							<h3>10 Week Course</h3>
							<h4>40 Hours of Instructional Time</h4>
							<div className={style.divider}></div>
						</div>
						<div className={style.details}>
							<div className={style.details__inner}>
								<AiFillSchedule className={style.icon} />
								<p>
									30 Hours of Instruction, 10 Hours of Testing
									<br />
									Three Full SAT Proctored Exams With Scores and Analysis
									<br />
									Twice a Week (Monday & Wednesday)
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
						</div>

						<div className={style.button_container}>
							<div className={style.button_container__inner}>
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
				</div>
			</section>
		</>
	);
};

const mapStateToProps = (state: RootStateOrAny) => ({
	modal: state.modal,
});

export default connect(mapStateToProps, { setModalState, setCategory })(ClassSchedule);
