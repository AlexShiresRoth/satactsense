import React, { useState } from 'react';
import PropTypes from 'prop-types';
import navStyle from './Nav.module.scss';
import { connect } from 'react-redux';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

interface MobileProps {
	subjectTabs: Array<any>;
	handleCurrentChange: (e: any, subject: string) => any;
	handleScrollDown: (val: number) => any;
}

const MobileNav = ({ subjectTabs, handleCurrentChange, handleScrollDown }: MobileProps) => {
	const [menuOpen, setMenuState] = useState(false);

	return (
		<div className={navStyle.mobile_nav}>
			<div className={navStyle.container}>
				<button onClick={() => setMenuState(!menuOpen)}>
					{menuOpen ? <IoIosClose /> : <IoIosMenu />}
					{` `}
					Menu
				</button>
				<div className={menuOpen ? navStyle.dropdown_mobile : navStyle.dropdown_mobile_hidden}>
					<ul>
						{subjectTabs.map((subject, i) => {
							return subject.dropdown.length > 0 ? (
								<>
									<li>
										<button
											onClick={(e) => {
												handleCurrentChange(e, subject.id);
												setMenuState(!menuOpen);
												handleScrollDown(500);
											}}
										>
											{subject.title}
										</button>
									</li>
									<li key={i}>
										{subject.dropdown.map((item: any) => {
											return (
												<button
													onClick={(e) => {
														handleCurrentChange(e, item.dropid);
														setMenuState(!menuOpen);
														handleScrollDown(500);
													}}
												>
													{item.title}
												</button>
											);
										})}
									</li>
								</>
							) : (
								<li key={i}>
									<button
										onClick={(e) => {
											handleCurrentChange(e, subject.id);
											setMenuState(!menuOpen);
											handleScrollDown(500);
										}}
									>
										{subject.title}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

MobileNav.propTypes = {
	handleCurrentChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
	};
};

export default connect(mapStateToProps, null)(MobileNav);
