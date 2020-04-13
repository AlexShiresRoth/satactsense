import React from 'react';
import PropTypes from 'prop-types';
import menuStyle from './Nav.module.scss';
import { subjectArray } from './subjectArray';
type NavProps = {
	current: string;
	isModalVisible: boolean;
	category: string;
	setModalState: Function;
};

const Menu = ({ current, setModalState }: NavProps) => {
	return (
		<div className={menuStyle.row}>
			{subjectArray
				.filter((subject) => {
					return current === subject.id;
				})
				.map((type) => {
					return type.types.map((subject, i) => {
						return (
							<div className={menuStyle.subject} key={i}>
								<button
									onClick={(e) =>
										setModalState({
											isModalVisible: true,
											category: subject.title,
										})
									}
								>
									{subject.title}
								</button>
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
					});
				})}
		</div>
	);
};

Menu.propTypes = {
	current: PropTypes.string.isRequired,
	setModalState: PropTypes.func.isRequired,
};

export default Menu;
