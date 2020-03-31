import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = (props: any) => {
	const [expanded, setExpand] = useState(false);
	const menuItems = [{ title: 'Test Prep' }, { title: 'About' }, { title: 'Success Stories' }, { title: 'Contact' }];
	return (
		<header className={headerStyle.header}>
			<video autoPlay loop muted className={headerStyle.bg_video}>
				<source src={require('../videos/bg-video2.mp4')} type="video/mp4" />
			</video>
			<div className={expanded ? `${headerStyle.menu_expanded} ${headerStyle.menu}` : headerStyle.menu}>
				{expanded ? (
					<button onClick={(e: React.MouseEvent) => setExpand(false)}>
						<IoIosClose />
					</button>
				) : (
					<button onClick={(e: React.MouseEvent) => setExpand(true)}>
						<IoIosMenu />
					</button>
				)}
				<div className={expanded ? headerStyle.menu_show : headerStyle.menu_hidden}>
					<ul>
						{menuItems.map((item, i) => {
							return <li>{item.title}</li>;
						})}
					</ul>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
