//White tabs under the blue
export const subjectArray = [
	{
		id: 'AP',
		types: [
			{ title: 'AP Math', dropdown: ['AP Calculus & Statistics'] },
			{ title: 'AP History', dropdown: ['AP US History', 'AP World History'] },
			{ title: 'AP English', dropdown: ['AP Language', 'AP Reading', 'AP Writing'] },
			{
				title: 'AP Science',
				dropdown: ['AP Physics', 'AP Chemistry', 'AP Living Environment', 'AP Biology'],
			},
			{ title: 'AP Business', dropdown: ['AP Micro or Macro Economics'] },
			{ title: 'AP Foreign Language', dropdown: ['AP Spanish'] },
			{ title: 'AP Psychology', dropdown: ['AP Psychology'] },
		],
	},
	{
		id: 'SUBJECT',
		types: [
			{ title: 'Literature', dropdown: ['Literature (SAT II Subject Test)'] },
			{ title: 'History', dropdown: ['World History (SAT II Subject Test)', 'US History (SAT II Subject Test)'] },
			{ title: 'Mathematics', dropdown: ['Level 1 (SAT II Subject Test)', 'Level 2 (SAT II Subject Test)'] },
			{
				title: 'Sciences',
				dropdown: [
					'Biology: (Ecological and Molecular) (SAT II Subject Test)',
					'Physics (SAT II Subject Test)',
					'Chemistry (SAT II Subject Test)',
				],
			},
			{ title: 'Languages', dropdown: ['Spanish (SAT II Subject Test)', 'French (SAT II Subject Test)'] },
		],
	},
	{
		id: 'PSAT/PLAN',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'SAT/ACT',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'GENERAL',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'CTY',
		types: [
			{ title: 'SCAT (Grades 2-8)', dropdown: ['SCAT'] },
			{ title: 'PSAT & SCAT (Grades 5-6)', dropdown: ['PSAT & SCAT'] },
			{ title: 'PSAT, SAT & SCAT (Grades 7-8)', dropdown: ['PSAT, SAT & SCAT'] },
		],
	},
];

//First set of tabs(Blue)
export const serviceLinks = [
	{
		title: 'AP/SAT II Subject Testing',
		path: '/ap',
		id: 'AP',
		dropdown: [
			{ title: 'AP Testing', dropid: 'AP' },
			{ title: 'SAT II Subject Testing', dropid: 'SUBJECT' },
		],
	},
	{
		title: 'PSAT/PLAN',
		path: '/psat',
		id: 'PSAT/PLAN',
		dropdown: [
			{ title: 'PSAT(Abridged version of SAT)', dropid: 'PSAT/PLAN' },
			{ title: 'PLAN(Abridged version of ACT)', dropid: 'PSAT/PLAN' },
		],
	},
	{
		title: 'SAT/ACT Prep',
		path: '/satact',
		id: 'SAT/ACT',
		dropdown: [
			{ title: 'SAT', dropid: 'SAT' },
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
		id: 'CTY',
		dropdown: [{ title: 'CTY Program-Center for Talented Youth', dropid: 'CTY' }],
	},
];
