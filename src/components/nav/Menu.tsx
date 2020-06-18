import React from 'react';
import PropTypes from 'prop-types';
import menuStyle from './Nav.module.scss';
import { subjectArray } from './subjectArray';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';
type NavProps = {
	current: string;
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
};

const Menu = ({ current, setModalState, setCategory }: NavProps) => {
	return (
		<>
			{subjectArray
				.filter((subject) => current === subject.id)
				.map((type, i) => {
					return (
						<div className={type.types.length > 0 ? menuStyle.row : menuStyle.row_hidden} key={i}>
							{type.types.map((subject, i) => {
								return (
									<div className={menuStyle.subject} key={i}>
										<button>{subject.title}</button>
										<div className={menuStyle.dropdown}>
											{subject.dropdown.length > 0
												? subject.dropdown.map((item, i) => {
														return (
															<ul key={i}>
																<li
																	key={i}
																	onClick={(e) => {
																		setModalState(true);
																		setCategory(item);
																	}}
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
							})}
						</div>
					);
				})}
		</>
	);
};

Menu.propTypes = {
	current: PropTypes.string.isRequired,
};

export default connect(null, { setCategory, setModalState })(Menu);
