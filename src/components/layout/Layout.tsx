import React, { ReactNode } from 'react';
import layoutStyle from './Layout.module.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main className={layoutStyle.main}>
			<div className={layoutStyle.main__container}>{children}</div>
		</main>
	);
};

export default Layout;
