export const subjectArray = [
	{
		id: 'AP',
		types: [
			{ title: 'AP Math', dropdown: ['AP Calculus & Statistics'] },
			{ title: 'AP History', dropdown: ['AP US History', 'AP World'] },
			{ title: 'AP English', dropdown: ['AP Language', 'AP Reading', 'AP Writing'] },
			{
				title: 'AP Science',
				dropdown: ['AP Physics', 'AP Chemistry', 'AP Living Environment', 'AP Biology'],
			},
			{ title: 'AP Business', dropdown: ['AP Micro or Macro Economics'] },
			{ title: 'AP Foreign Language', dropdown: ['AP Spanish'] },
			{ title: 'AP Psychology', dropdown: [] },
		],
	},
	{
		id: 'SUBJECT',
		types: [
			{ title: 'Literature', dropdown: [] },
			{ title: 'History', dropdown: ['World History', 'US History'] },
			{ title: 'Mathematics', dropdown: ['Level 1', 'Level 2'] },
			{ title: 'Sciences', dropdown: ['Biology: (Ecological and Molecular)', 'Physics', 'Chemistry'] },
			{ title: 'Languages', dropdown: ['Spanish', 'French'] },
		],
	},
	{
		id: 'SAT/ACT',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'General',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'Jht',
		types: [{ title: '', dropdown: [] }],
	},
];

export const serviceLinks = [
	{
		title: 'AP/Subject Testing',
		path: '/ap',
		id: 'AP',
		dropdown: [
			{ title: 'AP Testing', dropid: 'AP' },
			{ title: 'Subject Testing', dropid: 'SUBJECT' },
		],
	},
	{
		title: 'SAT/ACT Prep',
		path: '/satact',
		id: 'SAT/ACT',
		dropdown: [
			{ title: 'SAT', dropid: 'ACT' },
			{ title: 'ACT', dropid: 'ACT' },
		],
	},
	{
		title: 'General Tutoring',
		path: '/general',
		id: 'GENERAL',
		dropdown: [],
	},
	{
		title: 'Johns Hopkins Program for Advanced Testing',
		path: '/jht',
		id: 'JHT',
		dropdown: [],
	},
];
