//White tabs under the blue
export const subjectArray = [
	{
		id: 'LANDING',
		types: [],
	},
	{
		id: 'AP',
		types: [
			{ title: 'AP Math', dropdown: ['AP Calculus & Statistics'] },
			{ title: 'AP History', dropdown: ['AP US History', 'AP World History'] },
			{
				title: 'AP English',
				dropdown: ['AP Language', 'AP Reading', 'AP Writing'],
			},
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
			{
				title: 'History',
				dropdown: ['World History (SAT II Subject Test)', 'US History (SAT II Subject Test)'],
			},
			{
				title: 'Mathematics',
				dropdown: ['Math Level 1 (SAT II Subject Test)', 'Math Level 2 (SAT II Subject Test)'],
			},
			{
				title: 'Sciences',
				dropdown: [
					'Biology: (Ecological and Molecular) (SAT II Subject Test)',
					'Physics (SAT II Subject Test)',
					'Chemistry (SAT II Subject Test)',
				],
			},
			{
				title: 'Languages',
				dropdown: ['Spanish (SAT II Subject Test)', 'French (SAT II Subject Test)'],
			},
		],
	},
	{
		id: 'PSAT/PLAN',
		types: [
			{ title: 'PSAT 10th Grade', dropdown: ['PSAT 10th Grade'] },
			{ title: 'PSAT 11th Grade', dropdown: ['PSAT 11th Grade'] },
			{ title: 'PLAN 10th Grade', dropdown: ['PLAN 10th Grade'] },
			{ title: 'PLAN 11th Grade', dropdown: ['PLAN 11th Grade'] },
		],
	},
	{
		id: 'SAT/ACT',
		types: [],
	},
	{
		id: 'SAT',
		types: [],
	},
	{
		id: 'ACT',
		types: [],
	},
	{
		id: 'ACTMAT',
		types: [],
	},
	{
		id: 'SATMAT',
		types: [],
	},
	{
		id: 'GENERAL',
		types: [
			{ title: 'Mathematics', dropdown: ['Mathematics (General)'] },
			{ title: 'History', dropdown: ['History (General)'] },
			{ title: 'Sciences', dropdown: ['Sciences (General)'] },
			{ title: 'Languages', dropdown: ['Languages (General)'] },
			{ title: 'Business Courses', dropdown: ['Business Courses (General)'] },
			{ title: 'College Courses', dropdown: ['College Courses (General)'] },
			{ title: 'Elementary & Middle School', dropdown: ['Elementatry & Middle School (General)'] },
		],
	},
	{
		id: 'CTY',
		types: [
			{ title: 'SCAT (Grades 2-8)', dropdown: ['SCAT'] },
			{ title: 'PSAT & SCAT (Grades 5-6)', dropdown: ['PSAT & SCAT'] },
			{ title: 'SAT & SCAT (Grades 7-8)', dropdown: ['SAT & SCAT'] },
		],
	},
	{
		id: 'CCLC',
		types: [],
	},
];

//First set of tabs(Blue)
export const serviceLinks = [
	{ title: 'Home', path: '/', id: 'LANDING', dropdown: [] },
	{
		title: 'AP/SAT II Subject Testing',
		path: '/ap',
		id: 'AP',
		dropdown: [
			{ title: 'AP Testing', dropid: 'AP', path: '/ap' },
			{ title: 'SAT II Subject Testing', dropid: 'SUBJECT', path: '/sattwo' },
		],
	},
	{
		title: 'PSAT/PLAN',
		path: '/psatandplan',
		id: 'PSAT/PLAN',
		dropdown: [],
	},
	{
		title: 'SAT/ACT Prep',
		path: '/satandact',
		id: 'SAT/ACT',
		dropdown: [
			{ title: 'SAT', dropid: 'SAT', path: '/sat' },
			{ title: 'ACT', dropid: 'ACT', path: '/act' },
			{ title: 'ACT Materials', dropid: 'ACTMAT', path: '/actmaterials' },
			{ title: 'SAT Materials', dropid: 'SATMAT', path: '/satmaterials' },
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
		path: '/johnshopkins',
		id: 'CTY',
		dropdown: [],
	},
	{
		title: 'College Consulting and Life Coaching',
		path: '/collegeconsulting',
		id: 'CCLC',
		dropdown: [],
	},
];

export const categories = [
	'SAT Prep',
	'ACT Prep',
	'ACT English Manual PDF',
	'SAT Manual for Writing and Language Section',
	'AP Math',
	'AP Calculus & Statistics',
	'AP History',
	'AP US History',
	'AP World History',
	'AP English',
	'AP Language',
	'AP Reading',
	'AP Writing',
	'AP Science',
	'AP Physics',
	'AP Chemistry',
	'AP Living Environment',
	'AP Biology',
	'AP Business',
	'AP Micro or Macro Economics',
	'AP Foreign Language',
	'AP Spanish',
	'AP Psychology',
	'AP Psychology',
	'Literature (SAT II Subject Test)',
	'World History (SAT II Subject Test)',
	'US History (SAT II Subject Test)',
	'Math Level 1 (SAT II Subject Test)',
	'Math Level 2 (SAT II Subject Test)',
	'Biology: (Ecological and Molecular) (SAT II Subject Test)',
	'Physics (SAT II Subject Test)',
	'Chemistry (SAT II Subject Test)',
	'Spanish (SAT II Subject Test)',
	'French (SAT II Subject Test)',
	'PSAT 10th Grade',
	'PSAT 11th Grade',
	'PLAN 10th Grade',
	'PLAN 11th Grade',
	'Mathematics (General)',
	'History (General)',
	'Sciences (General)',
	'Languages (General)',
	'Business Courses (General)',
	'College Courses (General)',
	'Elementary & Middle School (General)',
	'Johns Hopkins SCAT (Grades 2-8)',
	'Johns Hopkins PSAT & SCAT (Grades 5-6)',
	'Johns Hopkins SAT & SCAT (Grades 7-8)',
	'Virtual Tutoring Consultations',
	'General',
];
