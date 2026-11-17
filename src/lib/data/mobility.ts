import type { MobilityTarget } from '#lib/types';

export const mobility: {
	intro: string;
	goal: string;
	targets: MobilityTarget[];
} = {
	intro:
		'Placeholder section: describe your international mobility plan (exchange semester, target universities and programs).',
	goal: 'Goal: to be defined.',
	targets: [
		{
			plan: 'Plan A',
			country: 'Country',
			flag: '🌍',
			university: 'Target University 1',
			program: 'Program · semester',
			description: 'Why this university fits: research areas, industry ties, city.',
			status: 'To be confirmed'
		},
		{
			plan: 'Plan B',
			country: 'Country',
			flag: '🌍',
			university: 'Target University 2',
			program: 'Program · semester',
			description: 'Why this alternative works and what it focuses on.',
			status: 'To be confirmed'
		}
	]
};

export const applicationKit: {
	title: string;
	subtitle: string;
	files: { label: string; url: string }[];
} = {
	title: 'Application kit',
	subtitle: 'CVs, cover letters and profiles, all in one place.',
	files: [
		{ label: 'CV (EN)', url: '/files/cv-en.pdf' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username' }
	]
};
