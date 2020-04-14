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
		id: 'GENERAL',
		types: [{ title: '', dropdown: [] }],
	},
	{
		id: 'CTY',
		types: [
			{ title: 'Grades 2-8', dropdown: ['SCAT Test', 'Quantative and Verbal Assessment'] },
			{ title: 'Grades 5-6', dropdown: ['PSAT'] },
			{ title: 'Grades 7-8', dropdown: ['SAT Test (Grades 7-8)', 'Student of Exceptional Talent'] },
		],
	},
];

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
		dropdown: [{ title: 'CTY Program for Talented Youth', dropid: 'CTY' }],
	},
];
