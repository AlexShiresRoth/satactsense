import React from 'react';
import PropTypes from 'prop-types';
import style from './TwentyFiveHoursPanel.module.scss';
import { MdClose } from 'react-icons/md';

interface Props {
	visible: boolean;
	handlePanel: (val: any) => any;
}

const TwentyFiveHoursPanel = ({ visible, handlePanel }: Props) => {
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
					<h1>25- Hour SAT Class (6-week)</h1>
					<h2>Weekday 6-week SAT CLASS Twice a Week (Monday & Wednesday)</h2>
				</div>
			</div>
		</div>
	);
};

TwentyFiveHoursPanel.propTypes = {};

export default TwentyFiveHoursPanel;
