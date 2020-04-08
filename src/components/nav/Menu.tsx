import React from 'react';
import PropTypes from 'prop-types';
import menuStyle from './Nav.module.scss';
type NavProps = {
	current: string;
};

const Menu = ({ current }: NavProps) => {
	const subjectArray = [
		{
			id: 'AP',
			types: [
				{ title: 'AP Math', dropdown: ['Calculus & Statistics'] },
				{ title: 'AP History', dropdown: ['US History', 'World'] },
				{ title: 'AP English', dropdown: ['Language', 'Reading', 'Writing'] },
				{ title: 'AP Science', dropdown: ['Physics', 'Chemistry', 'Living Environment', 'Biology'] },
				{ title: 'AP Business', dropdown: ['Micro or Macro Economics'] },
				{ title: 'AP Foreign Language', dropdown: ['Spanish'] },
				{ title: 'AP Psychology', dropdown: null },
			],
		},
		{
			id: 'SAT/ACT',
			types: [],
		},
		{
			id: 'General',
			types: [],
		},
		{
			id: 'Jht',
			types: [],
		},
	];

	return (
		<div className={menuStyle.row}>
			{subjectArray
				.filter((subject, i) => {
					return current === subject.id;
				})
				.map((type) => {
					console.log(type.types);
					return type.types.map((subject, i) => {
						return (
							<div className={menuStyle.subject}>
								<button>{subject.title}</button>
								<div className={menuStyle.dropdown}>
									<ul>
										{subject.dropdown !== null
											? subject.dropdown.map((item, i) => {
													return <li key={i}>{item}</li>;
											  })
											: null}
									</ul>
								</div>
							</div>
						);
					});
				})}
		</div>
	);
};

Menu.propTypes = {};

export default Menu;
