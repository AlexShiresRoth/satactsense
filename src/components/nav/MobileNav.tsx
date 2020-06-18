import React, { useState } from 'react';
import navStyle from './Nav.module.scss';
import { connect } from 'react-redux';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface MobileProps {
	subjectTabs: Array<any>;
}

const MobileNav = ({ subjectTabs }: MobileProps) => {
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
								<div key={i}>
									<li>
										<Link to={subject.path}>
											<button
												onClick={(e) => {
													setMenuState(!menuOpen);
												}}
											>
												{subject.title}
											</button>
										</Link>
									</li>
									{subject.dropdown.map((item: any, i: number) => {
										return (
											<li key={i}>
												<Link to={item.path}>
													<button
														onClick={(e) => {
															setMenuState(!menuOpen);
														}}
													>
														{item.title}
													</button>
												</Link>
											</li>
										);
									})}
								</div>
							) : (
								<li key={i}>
									<Link to={subject.path}>
										<button
											onClick={(e) => {
												setMenuState(!menuOpen);
											}}
										>
											{subject.title}
										</button>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		headerData: state.headerData,
	};
};

export default connect(mapStateToProps, null)(MobileNav);
