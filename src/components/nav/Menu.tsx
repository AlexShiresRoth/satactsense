import React from 'react';
import PropTypes from 'prop-types';
import menuStyle from './Nav.module.scss';
import { subjectArray } from './subjectArray';
type NavProps = {
	current: string;
	setModalState: Function;
};

const Menu = ({ current, setModalState, }: NavProps) => {

	return (<>{
		subjectArray
			.filter((subject) => current === subject.id)
			.map((type) => {
				return <div className={type.types.length > 0 ? menuStyle.row : menuStyle.row_hidden}>
					{type.types.map((subject, i) => {
						return (
							<div className={menuStyle.subject} key={i}>
								<button>{subject.title}</button>
								<div className={menuStyle.dropdown}>
									{subject.dropdown.length > 0
										? subject.dropdown.map((item, i) => {
											return (
												<ul>
													<li
														key={i}
														onClick={(e) =>
															setModalState({
																isModalVisible: true,
																category: item,
															})
														}
													>
														{item}
													</li>
												</ul>
											);
										})
										: null}
								</div>
							</div>
						);
					})};
				</div>
			})

	}</>);
};

Menu.propTypes = {
	current: PropTypes.string.isRequired,
	setModalState: PropTypes.func.isRequired,
};

export default Menu;
